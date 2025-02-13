import {StoredSkill} from './stored-skill';
import {StoredTable} from './stored-table';
import {StoredIngredient} from './stored-ingredient';
import {StoredOutput} from './stored-output';

export interface CalculatorConfig {
  skills: StoredSkill[];
  tables: StoredTable[];
  ingredients: StoredIngredient[];
  outputs: StoredOutput[];
  resourceCostMultiplier: number;
  expensiveEndgameCost: boolean;
  laborCost: number;
  profitPercent: number;
}
