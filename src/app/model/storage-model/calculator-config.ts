import {StoredSkill} from './stored-skill';
import {StoredTable} from './stored-table';
import {StoredItem} from './stored-item';
import {StoredRecipe} from './stored-recipe';

export interface CalculatorConfig {
  skills: StoredSkill[];
  tables: StoredTable[];
  ingredients: StoredItem[];
  outputs: StoredRecipe[];
  resourceCostMultiplier: number;
  expensiveEndgameCost: boolean;
  laborCost: number;
  profitPercent: number;
}
