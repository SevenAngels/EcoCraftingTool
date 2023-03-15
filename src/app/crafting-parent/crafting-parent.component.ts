import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {SkillsComponent} from '../skills/skills.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {OutputsComponent} from '../outputs/outputs.component';
import {CraftingDataService} from '../service/crafting-data.service';
import {Skill} from '../interface/skill';
import {Item} from '../interface/item';
import {Recipe} from '../interface/recipe';
import {CraftingTable} from '../interface/crafting-table';
import {Locale, LocaleService} from '../service/locale.service';
import {CookieService} from 'ngx-cookie-service';
import {SkillCookie} from '../cookie/skill-cookie';
import {TableCookie} from '../cookie/table-cookie';
import {IngredientCookie} from '../cookie/ingredient-cookie';
import {OutputCookie} from '../cookie/output-cookie';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {whiteTigerRecipes} from '../../assets/data/white-tiger/white-tiger-recipes';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {standardRecipes} from '../../assets/data/recipes';
import {OutputDisplay} from '../interface/output-display';
import {RecipeModalComponent} from '../recipe-modal/recipe-modal.component';

@Component({
  selector: 'app-crafting-parent',
  templateUrl: './crafting-parent.component.html',
  styleUrls: ['./crafting-parent.component.css'],
  providers: [CraftingDataService]
})
export class CraftingParentComponent implements OnInit {

  @Input() imageBaseUrl;
  @Input() imageTemplateUrl;

  @ViewChild(SkillsComponent)
  private skillsComponent: SkillsComponent;

  @ViewChild(IngredientsComponent)
  private ingredientsComponent: IngredientsComponent;

  @ViewChild(OutputsComponent)
  private outputsComponent: OutputsComponent;

  private resourceCostMultiplier: number;

  constructor(private dataService: CraftingDataService, private localeService: LocaleService, private cookieService: CookieService,
              @Inject(LOCAL_STORAGE) private storageService: StorageService) {
    this.resourceCostMultiplier = 1;
  }

  /**
   * Utility method for matching two strings.
   * @param str1 first string to match
   * @param str2 second string to match
   * @private
   */
  private static strMatch(str1: string, str2: string): boolean {
    return str1.localeCompare(str2) === 0;
  }

  ngOnInit() {
    let multiplier = this.storageService.get('resourceCostMultiplier');
    let expensiveEndgame = this.storageService.get('expensiveEndgameCost');

    if (multiplier != null) {
      this.resourceCostMultiplier = Number.parseFloat(multiplier);
    }

    if (expensiveEndgame != null) {
      this.dataService.setExpensiveEndgameCost(expensiveEndgame === 'true');
    }
  }

  onSkillAdded(skill: Skill) {
    let newItemIngredients = this.dataService.getUniqueItemIngredientsForSkills([skill], false)
      .concat(this.ingredientsComponent.itemIngredients);

    //Remove any item ingredients that are no longer relevant
    for (let i = this.ingredientsComponent.itemIngredients.length - 1; i >= 0; i--) {
      let item = this.ingredientsComponent.itemIngredients[i];
      let relevant = false;
      newItemIngredients.forEach(newItem => {
        if (item.nameID.localeCompare(newItem.nameID) === 0) {
          relevant = true;
        }
      });
      if (!relevant) {
        this.ingredientsComponent.itemIngredients.splice(i, 1);
      }
    }

    //Add all the new item ingredients associated with the skill
    newItemIngredients.forEach(item => {

      let exists = false;
      this.ingredientsComponent.itemIngredients.forEach(ingredient => {
        if (ingredient.nameID.localeCompare(item.nameID) === 0) {
          exists = true;
        }
      });
      if (!exists) {
        this.ingredientsComponent.itemIngredients.push(item);
      }
    });

    //Sort the ingredients array
    this.ingredientsComponent.sortIngredients();

    //Now check new recipes
    let recipes = this.dataService.getRecipesForSkills([skill], false);

    this.outputsComponent.outputRecipes.push(...recipes);

    this.recalculateOutputPrices();

    //Finally sort the recipes array
    this.outputsComponent.sortRecipes();

    //Tell the outputs component to populate the output displays
    this.outputsComponent.convertRecipesToOutputDisplays();

    this.saveDataToLocalStorage();
  }

  onTableAdded(table: CraftingTable) {
    let recipes = this.dataService.getRecipesForTableAndSkills(table, this.skillsComponent.selectedSkills);
    recipes.forEach(recipe => {
      let exists = this.outputsComponent.outputRecipes.some(outputRecipe => {
        return outputRecipe.nameID.localeCompare(recipe.nameID) === 0;
      });
      if (!exists) {
        this.outputsComponent.outputRecipes.push(recipe);
        recipe.ingredients.forEach(ing => {
          if (!this.ingredientsComponent.ingredientExists(ing.item.nameID) && !this.outputsComponent.outputExists(ing.item.nameID)) {
            let item = this.dataService.getItems().find(itm => itm.nameID.localeCompare(ing.item.nameID) === 0);
            item.price = 0;
            this.ingredientsComponent.itemIngredients.push(item);
          }
        });

        for (let i = this.ingredientsComponent.itemIngredients.length - 1; i >= 0; i--) {
          let item = this.ingredientsComponent.itemIngredients[i];
          if (CraftingParentComponent.strMatch(item.nameID, recipe.primaryOutput.item.nameID)) {
            this.ingredientsComponent.itemIngredients.splice(i, 1);
          }
        }
      }
    });

    this.ingredientsComponent.sortIngredients();
    this.recalculateOutputPrices();
    this.saveDataToLocalStorage();
  }

  onSkillLevelChanged(skill: Skill): void {
    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onLavishUpdated(skill: Skill): void {
    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onUpgradeChanged(table: CraftingTable) {
    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onSkillRemoved(skill: Skill): void {
    //Filter out all recipes that are based on the removed skill
    this.outputsComponent.outputRecipes = this.outputsComponent.outputRecipes.filter(recipe => {
      return recipe.skill.nameID.localeCompare(skill.nameID) !== 0;
    });

    //Remove all item ingredients that are only used for recipes in that skill
    for (let i = this.ingredientsComponent.itemIngredients.length - 1; i >= 0; i--) {
      let ingredient = this.ingredientsComponent.itemIngredients[i];
      let stillNeeded = false;
      this.outputsComponent.outputRecipes.forEach(recipe => {
        if (recipe.ingredients.some(recipeIngredient => recipeIngredient.item.nameID.localeCompare(ingredient.nameID) === 0)) {
          stillNeeded = true;
        }
      });
      if (!stillNeeded) {
        this.ingredientsComponent.itemIngredients.splice(i, 1);
      }
    }

    //Add new item ingredients that may have been covered by recipes from the removed skill
    let newIngredients = this.dataService.getUniqueItemIngredientsForRecipes(this.outputsComponent.outputRecipes);

    //Filter array to only ingredients that are not already present
    for (let i = newIngredients.length - 1; i >= 0; i--) {
      let ingredient = newIngredients[i];
      if (this.ingredientsComponent.itemIngredients.some(item => item.nameID.localeCompare(ingredient.nameID) === 0)) {
        newIngredients.splice(i, 1);
      }
    }

    //Remove any crafting tables that are no longer needed
    for (let i = this.skillsComponent.craftingTables.length - 1; i >= 0; i--) {
      let table = this.skillsComponent.craftingTables[i];
      let stillNeeded = this.outputsComponent.outputRecipes.some(recipe => {
        return recipe.craftingTable.nameID.localeCompare(table.nameID) === 0;
      });
      if (!stillNeeded) {
        this.skillsComponent.craftingTables.splice(i, 1);
      }
    }

    this.ingredientsComponent.itemIngredients.push(...newIngredients);
    this.ingredientsComponent.sortIngredients();

    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onLaborCostChanged(value: number): void {
    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onProfitPercentChanged(profitPercent: number): void {
    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onIngredientPriceChanged(item: Item): void {
    let affectedRecipes = this.outputsComponent.outputRecipes.filter(recipe => {
      return recipe.ingredients.some(ingredient => {
          return ingredient.item.nameID.localeCompare(item.nameID) === 0;
        }
      );
    });


    this.addDownstreamAffectedRecipes(affectedRecipes);
    affectedRecipes.forEach(recipe => {
      recipe.price = this.calculatePrice(recipe);
      this.outputsComponent.outputRecipes.forEach((recipe2, index) => {
        if (recipe.nameID.localeCompare(recipe2.nameID) === 0) {
          this.outputsComponent.outputRecipes[index] = recipe;
        }
      });
    });

    this.outputsComponent.convertRecipesToOutputDisplays();

    this.saveDataToLocalStorage();
  }

  onSubRecipeRemoved(recipe: Recipe): void {
    //Check the recipe inputs and see if they are still needed for some other output recipe
    recipe.ingredients.forEach(ingredient => {
      let stillNeeded = false;
      for (let i = this.outputsComponent.outputRecipes.length - 1; i >= 0; i--) {
        let recipe = this.outputsComponent.outputRecipes[i];
        recipe.ingredients.forEach(ingredient2 => {
          if (ingredient.item.nameID.localeCompare(ingredient2.item.nameID) === 0) {
            stillNeeded = true;
          }
        });
        if (stillNeeded) {
          break;
        }
      }

      //Ingredient is no longer needed, remove it
      if (!stillNeeded) {
        this.removeItemIngredient(ingredient.item.nameID);
      }
    });

    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onRecipeAdded(recipe: Recipe) {
    //Add the skill if it is not there
    let hasSkill = this.skillsComponent.selectedSkills.some(skill => CraftingParentComponent.strMatch(recipe.skill.nameID, skill.nameID));
    if (!hasSkill) {
      if (this.skillsComponent.skillLevelIsReadOnly(recipe.skill)) {
        recipe.skill.level = 0;
      } else {
        recipe.skill.level = 1;
      }
      recipe.skill.lavishChecked = false;
      this.skillsComponent.selectedSkills.push(recipe.skill);
    }

    //Add the crafting table if it is not there
    let hasTable = this.skillsComponent.craftingTables.some(table => CraftingParentComponent.strMatch(recipe.craftingTable.nameID, table.nameID));
    if (!hasTable) {
      let table = recipe.craftingTable;
      table.availableUpgrades = this.dataService.getUpgradeModulesForTable(table);
      table.selectedUpgrade = table.availableUpgrades.find(upgrade => upgrade.nameID.match('NoUpgrade'));
      this.skillsComponent.craftingTables.push(table);
    }

    //Add ingredient if it is not in inputs or outputs
    recipe.ingredients.forEach(ingredient => {
      let itemExists = this.ingredientsComponent.itemIngredients.some(item => CraftingParentComponent.strMatch(ingredient.item.nameID, item.nameID));
      itemExists = itemExists || this.outputsComponent.outputRecipes.some(recipe => CraftingParentComponent.strMatch(recipe.primaryOutput.item.nameID, ingredient.item.nameID));
      if (!itemExists) {
        let item = ingredient.item;
        item.price = 0;
        this.ingredientsComponent.itemIngredients.push(item);
      }
    });

    for (let i = this.ingredientsComponent.itemIngredients.length - 1; i >= 0; i--) {
      let item = this.ingredientsComponent.itemIngredients[i];
      if (CraftingParentComponent.strMatch(item.nameID, recipe.primaryOutput.item.nameID)) {
        this.ingredientsComponent.itemIngredients.splice(i, 1);
      }
    }

    this.ingredientsComponent.sortIngredients();

    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  /**
   * Called when a crafting table is removed by the user.
   * @param table the table that was removed
   */
  onTableRemoved(table: CraftingTable): void {
    //Filter recipes that are not performed on the given crafting table
    this.outputsComponent.outputRecipes = this.outputsComponent.outputRecipes.filter(recipe => {
      return recipe.craftingTable.nameID.localeCompare(table.nameID) !== 0;
    });

    //Remove any item ingredients that are no longer needed
    this.checkIngredientsForRemoval();

    //Remove skills that are no longer relevant
    this.checkSkillsForRemoval();

    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  updateResourceCostMultiplier(newMultiplier: number): void {
    this.resourceCostMultiplier = newMultiplier;

    this.recalculateOutputPrices();

    this.saveDataToLocalStorage();
  }

  onItemRemoved(recipes: Recipe[]): void {
    recipes.forEach(recipe => {
      this.onSubRecipeRemoved(recipe);
    });

    for (let i = this.skillsComponent.craftingTables.length - 1; i >= 0; i--) {
      let table = this.skillsComponent.craftingTables[i];
      if (!this.outputsComponent.outputRecipes.some(recipe => CraftingParentComponent.strMatch(recipe.craftingTable.nameID, table.nameID))) {
        this.skillsComponent.craftingTables.splice(i, 1);
      }
    }

    for (let i = this.skillsComponent.selectedSkills.length - 1; i >= 0; i--) {
      let skill = this.skillsComponent.selectedSkills[i];
      if (!this.outputsComponent.outputRecipes.some(recipe => CraftingParentComponent.strMatch(recipe.skill.nameID, skill.nameID))) {
        this.skillsComponent.selectedSkills.splice(i, 1);
      }
    }

    let item = recipes[0].primaryOutput.item;

    //Add new item ingredient that was removed if it is necessary
    let reqIngredients = this.dataService.getUniqueItemIngredientsForRecipes(this.outputsComponent.outputRecipes);
    if (reqIngredients.some(ing => CraftingParentComponent.strMatch(ing.nameID, item.nameID))) {
      this.ingredientsComponent.itemIngredients.push(item);
      this.ingredientsComponent.sortIngredients();
    }

    this.saveDataToLocalStorage();
  }

  updateLocale(locale: Locale) {
    this.skillsComponent.localize(locale);
    this.ingredientsComponent.localize(locale);
    this.outputsComponent.localize(locale);
    this.dataService.localize(locale);

    this.saveDataToLocalStorage();
  }

  updateEndgameCost(isExpensive: boolean): void {
    this.dataService.setExpensiveEndgameCost(isExpensive);

    let outputRecipes = this.outputsComponent.outputRecipes;

    for (let i = outputRecipes.length - 1; i >= 0; i--) {
      let recipe = outputRecipes[i];
      if (isExpensive) {
        for (let j = 0; j < this.dataService.cheapRecipes.length; j++) {
          let cheapRecipe = this.dataService.cheapRecipes[j];
          //If we find a cheap recipe remove it, and add the corresponding expensive recipe to the outputs component with index j
          if (CraftingParentComponent.strMatch(cheapRecipe.nameID, recipe.nameID)) {
            this.outputsComponent.onRecipeSelect(this.dataService.expensiveRecipes[j]);
            this.outputsComponent.onRemoveSubRecipe(cheapRecipe.nameID);
          }
        }
      } else {
        for (let j = 0; j < this.dataService.expensiveRecipes.length; j++) {
          let expensiveRecipe = this.dataService.expensiveRecipes[j];
          //If we find an expensive recipe remove it, and add the corresponding cheap recipe to the outputs component with index j
          if (CraftingParentComponent.strMatch(expensiveRecipe.nameID, recipe.nameID)) {
            this.outputsComponent.onRecipeSelect(this.dataService.cheapRecipes[j]);
            this.outputsComponent.onRemoveSubRecipe(expensiveRecipe.nameID);
          }
        }
      }

    }

    this.outputsComponent.refreshFilterList();
  }

  updateWhiteTigerRecipes(isEnabled: boolean): void {
    this.dataService.setWhiteTigerRecipesEnabled(isEnabled);
    this.outputsComponent.refreshFilteredRecipes();

    if (isEnabled) {
      whiteTigerRecipes.forEach(wtRecipe => {
        let matchRecipe = this.outputsComponent.outputRecipes.find(recipe => recipe.nameID.localeCompare(wtRecipe.nameID) === 0);
        if (isNotNullOrUndefined(matchRecipe)) {
          this.outputsComponent.onRemoveItem(matchRecipe.primaryOutput.item.nameID);
          this.outputsComponent.onRecipeSelect(wtRecipe);
        }
      });
    } else {
      standardRecipes.forEach(recipe => {
        let matchRecipe = this.outputsComponent.outputRecipes.find(wtRecipe => wtRecipe.nameID.localeCompare(recipe.nameID) === 0);
        if (isNotNullOrUndefined(matchRecipe)) {
          this.outputsComponent.onRemoveItem(matchRecipe.primaryOutput.item.nameID);
          this.outputsComponent.onRecipeSelect(recipe);
        }
      });
    }
  }

  /**
   * Recursively adds recipes that are downstream to the given array of recipes.
   *
   * E.g. Changing iron ore price will affect iron bar price. Iron bar is a downstream recipe because it does not directly
   * take iron ore as an ingredient.
   *
   * @param affectedRecipes the initially affected recipes
   * @private
   */
  private addDownstreamAffectedRecipes(affectedRecipes: Recipe[]): Recipe[] {
    let downstreamRecipes = [];
    affectedRecipes.forEach(recipe => {
      let primaryItemID = recipe.primaryOutput.item.nameID;
      let newRecipes = this.outputsComponent.outputRecipes.filter(outputRecipe => {
        return outputRecipe.ingredients.some(ingredient => ingredient.item.nameID.localeCompare(primaryItemID) === 0);
      });
      downstreamRecipes.push(...newRecipes);
    });
    //Base case
    if (downstreamRecipes.length === 0) {
      return affectedRecipes;
    } else {
      //Recursively call downstream on the new set of recipes
      affectedRecipes.push(...this.addDownstreamAffectedRecipes(downstreamRecipes));
      return affectedRecipes;
    }
  }

  /**
   * Calculates the price of a recipe and returns it, or Number.MIN_VALUE if the price cannot be calculated because some inputs
   * are outputs of other recipes yet to be calculated.
   * @param recipe the recipe for which the price will be calculated
   * @private
   */
  private calculatePrice(recipe: Recipe): number {
    //Get the ingredient prices on the recipe
    let basePrice = 0;
    let price = 0;

    recipe.ingredients.forEach(ingredient => {
      let found = false;
      this.ingredientsComponent.itemIngredients.forEach(item => {
        if (!found && ingredient.item.nameID.localeCompare(item.nameID) === 0) {
          ingredient.price = item.price;
          found = true;
        }
      });
      if (!found) {
        this.outputsComponent.outputRecipes.forEach(outputRecipe => {
          let output = outputRecipe.primaryOutput;
          if (outputRecipe.outputPriceCorrect && ingredient.item.nameID.localeCompare(output.item.nameID) === 0) {
            if (!found) {
              ingredient.price = outputRecipe.basePrice;
            } else if (ingredient.price > outputRecipe.basePrice) {
              ingredient.price = outputRecipe.basePrice;
            }
            found = true;
          }
        });
      }
      if (!found) {
        price = Number.MIN_VALUE;
      }
    });


    if (price === 0) {
      //Add the price of each ingredient
      let table = this.skillsComponent.craftingTables.find(table =>
        table.nameID.localeCompare(recipe.craftingTable.nameID) === 0);
      let skill = this.skillsComponent.selectedSkills.find(skill =>
        skill.nameID.localeCompare(recipe.skill.nameID) === 0);
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.reducible) {
          if (skill.lavishWorkspace && skill.lavishChecked) {
            price += (ingredient.price * ingredient.quantity * .95 * table.selectedUpgrade.modifier * this.resourceCostMultiplier);
          } else {
            price += (ingredient.price * ingredient.quantity * table.selectedUpgrade.modifier * this.resourceCostMultiplier);
          }
        } else {
          price += (ingredient.price * ingredient.quantity);
        }
      });

      //Special case for oil drilling where barrels are secondary output, reducing cost of epoxy, plastic, rubber, & nylon
      if (recipe.primaryOutput.item.nameID.localeCompare('BarrelItem') !== 0 &&
        recipe.outputs.some(output => output.item.nameID.localeCompare('BarrelItem') === 0) &&
        this.outputsComponent.outputRecipes.some(recipe => recipe.nameID.localeCompare('Barrel') === 0)) {
        let barrelPrice = this.outputsComponent.outputRecipes.find(recipe => recipe.nameID.localeCompare('Barrel') === 0).basePrice;
        let barrelQuantity = recipe.outputs.find(output => output.item.nameID.localeCompare('BarrelItem') === 0).quantity;
        let barrelSavings = barrelPrice * barrelQuantity * table.selectedUpgrade.modifier;
        if (skill.lavishWorkspace && skill.lavishChecked) {
          barrelSavings *= .95;
        }
        price -= barrelSavings;
      }

      //Add the labor cost
      let laborSkill = this.skillsComponent.selectedSkills.find(skill => {
        return skill.nameID.localeCompare(recipe.skill.nameID) === 0;
      });
      let reductionModifier = this.dataService.getLaborReductionForSkillLevel(laborSkill.level);
      let calories = recipe.labor * reductionModifier;
      price += ((this.ingredientsComponent.laborCost / 1000) * calories);

      //Divide by the number of items the recipe makes
      price /= recipe.primaryOutput.quantity;

      basePrice = price;

      //Add the profit
      let profitPercent = this.ingredientsComponent.profitPercent;
      price *= 1 + (profitPercent / 100);

      recipe.outputPriceCorrect = true;
    }

    recipe.basePrice = basePrice;
    recipe.price = price;

    return price;
  }

  private hasOtherRecipes(recipe: Recipe): boolean {
    return this.dataService.getRecipesForSkills(this.skillsComponent.selectedSkills, false)
      .some(otherRecipe => {
        return recipe.nameID.localeCompare(otherRecipe.nameID) !== 0 &&
          otherRecipe.primaryOutput.item.nameID.localeCompare(recipe.primaryOutput.item.nameID) === 0;
      });
  }

  /**
   * Removes an item ingredient from the ingredients component.
   * @param nameID the nameID of the item to be removed
   * @private
   */
  private removeItemIngredient(nameID: string): void {
    for (let i = this.ingredientsComponent.itemIngredients.length - 1; i >= 0; i--) {
      let item = this.ingredientsComponent.itemIngredients[i];
      if (item.nameID.localeCompare(nameID) === 0) {
        this.ingredientsComponent.itemIngredients.splice(i, 1);
      }
    }
  }

  /**
   * Recalculates all output recipe prices and converts for display.
   * @private
   */
  private recalculateOutputPrices(): void {
    //Set outputPriceCorrect to false for all output recipes
    this.outputsComponent.outputRecipes.forEach(recipe => recipe.outputPriceCorrect = false);

    while (this.hasPricesToRecalculate(this.outputsComponent.outputRecipes)) {
      this.outputsComponent.outputRecipes.filter(recipe => !recipe.outputPriceCorrect).forEach(recipe => {
        if (this.calculatePrice(recipe) > Number.MIN_VALUE) {
          recipe.outputPriceCorrect = true;
        }
      });
    }

    this.outputsComponent.convertRecipesToOutputDisplays();
  }

  /**
   * Determines whether the given recipe list contains any recipes whose price still needs to be calculated.
   * This is true if any recipes have outputPriceCorrect set to false.
   * @param recipes the recipes to check
   * @private
   */
  private hasPricesToRecalculate(recipes: Recipe[]): boolean {
    return recipes.find(recipe => !recipe.outputPriceCorrect) !== undefined;
  }

  /**
   * Removes skills that no longer have any valid recipes in the outputs component.
   * @private
   */
  private checkSkillsForRemoval(): void {
    this.skillsComponent.selectedSkills = this.skillsComponent.selectedSkills
      .filter(skill => {
        return this.outputsComponent.outputRecipes.some(recipe => recipe.skill.nameID.localeCompare(skill.nameID) === 0);
      });
  }

  private saveDataToLocalStorage(): void {

    this.storageService.set('laborCost', this.ingredientsComponent.laborCost.toLocaleString(this.localeService.selectedLocale.code,
      {minimumFractionDigits: 0, maximumFractionDigits: 2}));
    this.storageService.set('profitPercent', this.ingredientsComponent.profitPercent.toLocaleString(
      this.localeService.selectedLocale.code, {minimumFractionDigits: 0, maximumFractionDigits: 2}));

    let skillsCookie: SkillCookie[] = [];
    this.skillsComponent.selectedSkills.forEach(skill => skillsCookie.push(new SkillCookie(skill)));
    this.storageService.set('skills', skillsCookie);

    let tablesCookie: TableCookie[] = [];
    this.skillsComponent.craftingTables.forEach(table => tablesCookie.push(new TableCookie(table)));
    this.storageService.set('tables', tablesCookie);

    let ingredientsCookie: IngredientCookie[] = [];
    this.ingredientsComponent.itemIngredients.forEach(item => ingredientsCookie.push(new IngredientCookie(item)));
    this.storageService.set('ingredients', ingredientsCookie);

    let outputsCookie: OutputCookie[] = [];
    this.outputsComponent.outputRecipes.forEach(recipe => outputsCookie.push(new OutputCookie(recipe)));
    this.storageService.set('recipes', outputsCookie);
  }

  /**
   * Removes recipes that are no longer relevant based on the crafting tables and skills in the skills component.
   * @private
   */
  private checkRecipesForRemoval(): void {
    this.outputsComponent.outputRecipes = this.outputsComponent.outputRecipes
      .filter(recipe => {
        return this.skillsComponent.craftingTables.some(table => table.nameID.localeCompare(recipe.nameID));
      })
      .filter(recipe => {
        return this.skillsComponent.selectedSkills.some(skill => CraftingParentComponent.strMatch(skill.nameID, recipe.skill.nameID));
      });
  }

  /**
   * Removes item ingredients that are no longer relevant based on the recipes in the outputs component.
   * @private
   */
  private checkIngredientsForRemoval(): void {
    for (let i = this.ingredientsComponent.itemIngredients.length - 1; i >= 0; i--) {
      let item = this.ingredientsComponent.itemIngredients[i];
      let stillNeeded = this.outputsComponent.outputRecipes.some(recipe => {
        return recipe.ingredients.some(ingredient => CraftingParentComponent.strMatch(ingredient.item.nameID, item.nameID));
      });
      if (!stillNeeded) {
        this.ingredientsComponent.itemIngredients.splice(i, 1);
      }
    }
  }

  onRecipeModalOpened(component: RecipeModalComponent) {
    component.dropUp = this.shouldDropUp(component.outputDisplay, component.recipe.nameID);
    component.showModal();
  }

  shouldDropUp(outputDisplay: OutputDisplay, recipeNameID: string): boolean {
    let totalRecipeRows = 0;
    this.outputsComponent.outputDisplays.forEach(outputDisplay => totalRecipeRows += outputDisplay.subRecipes.length);
    if (totalRecipeRows < 8) {
      return false;
    } else {
      let recipeRowIndex = 0;
      for (let output of this.outputsComponent.outputDisplays) {
        for (let sub of output.subRecipes) {
          recipeRowIndex++;
          if (output.itemNameID.localeCompare(outputDisplay.itemNameID) === 0) {
            if (sub.recipeNameID.localeCompare(recipeNameID) === 0) {
              return recipeRowIndex >= 7 && recipeRowIndex >= (totalRecipeRows - 10)  &&
                (recipeRowIndex >= (this.ingredientsComponent.itemIngredients.length - 8));
            }
          }
        }
      }
    }

    return false;
  }


}
