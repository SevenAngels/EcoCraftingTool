import {CraftingTable} from './crafting-table';
import {Item} from './item';
import {Recipe} from './recipe';
import {Skill} from './skill';
import {Ingredient} from './ingredient';
import {Output} from './output';
import {UpgradeModule} from './upgrade-module';
import {LaborCost} from './labor-cost';

export interface CraftingData {
  craftingTables: CraftingTable[];
  upgradeModules: UpgradeModule[];
  items: Item[];
  recipes: Recipe[];
  skills: Skill[];
  ingredients: Ingredient[];
  outputs: Output[];
  laborCosts: LaborCost[];
}
