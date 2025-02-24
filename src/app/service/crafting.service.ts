import {computed, effect, Injectable, linkedSignal, signal, Signal, WritableSignal} from '@angular/core';
import {Skill} from '../model/skill';
import {CraftingTable} from '../model/crafting-table';
import {WebStorageService} from './storage.service';
import {UpgradeModule} from '../model/upgrade-module';
import {recipes} from '../../assets/data/recipes';
import {Recipe} from '../model/recipe';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CraftingService {

  //settings
  craftResourceModifier: WritableSignal<number>;
  expensiveEndgameRecipes: WritableSignal<boolean>;

  //skills
  selectedSkills: WritableSignal<Skill[]>;
  selectedTables: WritableSignal<CraftingTable[]>;

  //inputs
  pricePerThousandCals: WritableSignal<number>;
  defaultProfitPercent: WritableSignal<number>;
  selectedInputs: WritableSignal<Item[]>;
  selectedByproducts: WritableSignal<Item[]>;

  //outputs
  selectedRecipes: WritableSignal<Recipe[]>;
  primaryOutputIds: Signal<Set<string>>;

  constructor(storageService: WebStorageService) {
    this.craftResourceModifier = signal(storageService.getCraftResourceModifier());
    this.expensiveEndgameRecipes = signal(storageService.getExpensiveEndgameRecipes());

    this.selectedSkills = signal(storageService.getSelectedSkills());
    this.selectedTables = signal(storageService.getSelectedTables());

    this.selectedRecipes = signal(storageService.getSelectedRecipes());

    this.pricePerThousandCals = signal(storageService.getPricePerThousandCals());
    this.defaultProfitPercent = signal(storageService.getProfitPercent());

    this.primaryOutputIds = computed(() => new Set(
      this.selectedRecipes()
        .flatMap((recipe) => recipe.primaryOutput?.item.nameID)
        .filter((nameID): nameID is string => nameID !== undefined))
    );

    this.selectedInputs = linkedSignal(() => {
      let items: Item[] = [];
      this.selectedRecipes().forEach(recipe => {
        recipe.ingredients.forEach(ing => {
          if (!items.some(item => item.nameID === ing.item.nameID)) {
            items.push(ing.item);
          }
        });
      });

      //Filter out all the ingredients that are primary outputs of other selected recipes
      items = items.filter(item => !this.primaryOutputIds().has(item.nameID));
      items.sort((a, b) => a.name().localeCompare(b.name()));

      return items;
    });

    this.selectedByproducts = linkedSignal(() => {
      let byproducts: Item[] = [];
      this.selectedRecipes().forEach(recipe => {
        recipe.outputs.forEach(output => {
          if (!output.primary && !byproducts.some(item => item.nameID === output.item?.nameID) &&
            !this.selectedInputs().some(item => item.nameID === output.item?.nameID)) {
            byproducts.push(output.item);
          }
        });
      });

      //Filter out byproducts that are primary outputs of another recipe
      byproducts = byproducts.filter(item => !this.primaryOutputIds().has(item.nameID));

      byproducts.sort((a, b) => a.name().localeCompare(b.name()));
      return byproducts;
    });

    effect(() => {
      storageService.saveCraftResourceModifier(this.craftResourceModifier());
    });

    effect(() => {
      storageService.saveExpensiveEndgameRecipes(this.expensiveEndgameRecipes());
    });

    effect(() => {
      storageService.saveSelectedSkills(this.selectedSkills());
    });

    effect(() => {
      storageService.saveSelectedTables(this.selectedTables());
    });

    effect(() => {
      storageService.savePricePerThousandCals(this.pricePerThousandCals());
    });

    effect(() => {
      storageService.saveProfitPercent(this.defaultProfitPercent());
    });

    effect(() => {
      storageService.saveSelectedItems(this.selectedInputs());
    });

    effect(() => {
      storageService.saveSelectedByproducts(this.selectedByproducts());
    });

    effect(() => {
      storageService.saveSelectedRecipes(this.selectedRecipes());
    });
  }


  //Settings methods
  setCraftResourceModifier(value: number) {
    this.craftResourceModifier.set(value);
  }

  toggleExpensiveEndgameRecipes() {
    this.expensiveEndgameRecipes.update(value => !value);
  }

  //Skill methods
  selectSkill(skill: Skill) {
    if (this.selectedSkills().some(s => s.nameID === skill.nameID)) {
      return;
    }

    this.selectedSkills.update(skills => [...skills, skill]);

    let recipesToAdd: Recipe[] = [];
    let tablesToAdd: CraftingTable[] = [];

    //Find out which tables and recipes to add based on the selected skill
    for (const recipe of recipes.values()) {
      if (skill.nameID === recipe.skill?.nameID) {
        if (!this.selectedRecipes().some(r => r.nameID === recipe.nameID)) {
          recipesToAdd.push(recipe);
        }

        //Add the recipe's table as well, if it's not already marked for add and not already in the selected tables
        if (!tablesToAdd.some(t => t.nameID === recipe.craftingTable.nameID) &&
          !this.selectedTables().some(t => t.nameID === recipe.craftingTable.nameID)) {
          tablesToAdd.push(recipe.craftingTable);
        }
      }
    }

    this.selectedTables.update(tables => [...tables, ...tablesToAdd]);
    this.selectedRecipes.update(recipes => [...recipes, ...recipesToAdd]);
  }

  updateSkillLevel(level: number, skill: Skill) {
    skill.level.set(level);
  }

  removeSkill(index: number) {
    const skill = this.selectedSkills()[index];
    this.selectedSkills.update(skills => {
      skills.splice(index, 1);
      return [...skills];
    });

    this.selectedRecipes.update(recipes => {
      return recipes.filter(recipe => recipe.skill?.nameID !== skill.nameID);
    });

    this.selectedTables.update(tables => {
      //Remove any tables that no longer have any matching recipes
      return tables.filter(table => this.selectedRecipes().some(r => r.craftingTable.nameID === table.nameID));
    });
  }

  updateLavish(value: boolean, skill: Skill) {
    skill.lavishChecked.set(value);
  }

  //Table methods
  selectTable(table: CraftingTable) {
    if (this.selectedTables().some(t => t.nameID === table.nameID)) {
      return;
    }

    this.selectedTables.update(tables => {
      return [...tables, table];
    });

    //Add all recipes and skills for that table
    for (const recipe of recipes.values()) {
      if (recipe.craftingTable.nameID === table.nameID) {
        if (!this.selectedRecipes().some(r => r.nameID === recipe.nameID)) {
          this.selectedRecipes.update(recipes => [...recipes, recipe]);
          if (!this.selectedSkills().some(s => s.nameID === recipe.skill?.nameID)) {
            this.selectedSkills.update(skills => [...skills, recipe.skill]);
          }
        }
      }
    }
  }

  updateSelectedUpgrade(upgradeModule: UpgradeModule, table: CraftingTable) {
    table.selectedUpgrade.set(upgradeModule);
  }

  removeTableByIndex(index: number) {
    this.selectedTables.update(tables => {
      tables.splice(index, 1);
      return [...tables];
    });
  }

  removeTable(table: CraftingTable) {
    this.selectedTables.update(tables => {
      tables.splice(tables.indexOf(table), 1);
      return [...tables];
    });
  }

  //Input methods
  updatePricePerThousandCals(number: number) {
    this.pricePerThousandCals.set(number);
  }

  updateDefaultProfitPercent(number: number) {
    this.defaultProfitPercent.set(number);
  }

  updateInputPrice(index: number, value: number) {
    this.selectedInputs.update((items: Item[]) => {
      items[index].price.set(value);
      return items;
    });
  }

  updateByproductPrice(index: number, value: number) {
    this.selectedByproducts.update((items: Item[]) => {
      items[index].price.set(value);
      return items;
    });
  }
}
