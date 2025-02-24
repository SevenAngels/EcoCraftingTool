import {Inject, Injectable} from '@angular/core';
import {CalculatorConfig} from '../model/storage-model/calculator-config';
import {LocaleService} from './locale.service';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {StoredSkill} from '../model/storage-model/stored-skill';
import {Skill} from '../model/skill';
import {StoredTable} from '../model/storage-model/stored-table';
import {CraftingTable} from '../model/crafting-table';
import {skills} from '../../assets/data/skills';
import {tables} from '../../assets/data/crafting-tables';
import {Recipe} from '../model/recipe';
import {recipes} from '../../assets/data/recipes';
import {StoredRecipe} from '../model/storage-model/stored-recipe';
import {Item} from '../model/item';
import {StoredItem} from '../model/storage-model/stored-item';
import {items} from '../../assets/data/items';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storageService: StorageService, private localeService: LocaleService) {
  }

  getCalcConfig(): CalculatorConfig {
    let expensiveEndgame = this.storageService.get('expensiveEndgameCost');
    let multiplier = this.storageService.get('resourceCostMultiplier');
    let laborCost = this.storageService.get('laborCost');
    let profit = this.storageService.get('profitPercent');

    return {
      expensiveEndgameCost: expensiveEndgame === 'true',
      resourceCostMultiplier: multiplier != null ? Number.parseFloat(multiplier) : 1,
      laborCost: laborCost != null ? Number.parseFloat(laborCost) : 0,
      profitPercent: profit != null ? Number.parseFloat(profit) : 0,
      skills: this.storageService.get('skills'),
      tables: this.storageService.get('tables'),
      ingredients: this.storageService.get('ingredients'),
      outputs: this.storageService.get('recipes'),
    };
  }

  saveCalcConfig(calcConfig: CalculatorConfig) {
    this.storageService.set('expensiveEndgameCost', '' + calcConfig.expensiveEndgameCost);
    this.storageService.set('resourceCostMultiplier', calcConfig.resourceCostMultiplier);
    this.storageService.set('laborCost', calcConfig.laborCost.toLocaleString(
      this.localeService.selectedLocale().code, {minimumFractionDigits: 0, maximumFractionDigits: 2}));
    this.storageService.set('profitPercent', calcConfig.profitPercent.toLocaleString(
      this.localeService.selectedLocale().code, {minimumFractionDigits: 0, maximumFractionDigits: 2}));

    this.storageService.set('skills', calcConfig.skills);
    this.storageService.set('tables', calcConfig.tables);
    this.storageService.set('ingredients', calcConfig.ingredients);
    this.storageService.set('recipes', calcConfig.outputs);
  }

  getCraftResourceModifier(): number {
    const multiplier = this.storageService.get('resourceCostMultiplier');
    return multiplier != null ? Number.parseFloat(multiplier) : 1;
  }

  saveCraftResourceModifier(modifier: number) {
    this.storageService.set('resourceCostMultiplier', '' + modifier);
  }

  getExpensiveEndgameRecipes(): boolean {
    return this.storageService.get('expensiveEndgameCost') === 'true';
  }

  saveExpensiveEndgameRecipes(expensiveEndgame: boolean) {
    this.storageService.set('expensiveEndgameCost', '' + expensiveEndgame);
  }

  getSelectedSkills(): Skill[] {
    const storedSkills = this.storageService.get('skills');
    if (storedSkills) {
      return storedSkills.map((skill: StoredSkill) => skills.get(skill.id));
    }
    return [];
  }

  saveSelectedSkills(skills: Skill[]) {
    this.storageService.set('skills', skills.map(skill => new StoredSkill(skill)));
  }

  getSelectedTables(): CraftingTable[] {
    const storedTables = this.storageService.get('tables');
    if (storedTables) {
      return storedTables.map((table: StoredTable) => tables.get(table.id));
    }
    return [];
  }

  saveSelectedTables(tables: CraftingTable[]) {
    this.storageService.set('tables', tables.map(table => new StoredTable(table)));
  }

  getSelectedRecipes(): Recipe[] {
    const storedRecipes = this.storageService.get('recipes');
    if (storedRecipes) {
      return storedRecipes.map((recipe: StoredRecipe) => recipes.get(recipe.id));
    }
    return [];
  }

  saveSelectedRecipes(recipes: Recipe[]) {
    this.storageService.set('recipes', recipes.map(recipe => new StoredRecipe(recipe)));
  }

  getSelectedItems(): Item[] {
    const storedItems = this.storageService.get('ingredients');
    if (storedItems) {
      return storedItems.map((item: StoredItem) => items.get(item.id));
    }
    return [];
  }

  saveSelectedItems(items: Item[]) {
    this.storageService.set('ingredients', items.map(item => new StoredItem(item)));
  }

  getSelectedByproducts(): Item[] {
    const storedItems = this.storageService.get('byproducts');
    if (storedItems) {
      return storedItems.map((item: StoredItem) => items.get(item.id));
    }
    return [];
  }

  saveSelectedByproducts(items: Item[]) {
    this.storageService.set('byproducts', items.map(item => new StoredItem(item)));
  }

  getPricePerThousandCals(): number {
    const laborCost = this.storageService.get('laborCost');
    return laborCost != null ? Number.parseFloat(laborCost) : 0;
  }

  savePricePerThousandCals(amount: number) {
    this.storageService.set('laborCost', '' + amount);
  }

  getProfitPercent(): number {
    const profitPercent = this.storageService.get('profitPercent');
    return profitPercent != null ? Number.parseFloat(profitPercent) : 0;
  }

  saveProfitPercent(amount: number) {
    this.storageService.set('profitPercent', '' + amount);
  }
}
