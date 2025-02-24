import {ICraftingTable} from './crafting-table';
import {Item} from './item';
import {Recipe} from './recipe';
import {ISkill} from './skill';
import {Ingredient} from './ingredient';
import {Output} from './output';
import {IUpgradeModule} from './upgrade-module';
import {LaborCost} from './labor-cost';

export interface CraftingData {
  craftingTables: ICraftingTable[];
  upgradeModules: IUpgradeModule[];
  items: Item[];
  recipes: Recipe[];
  skills: ISkill[];
  ingredients: Ingredient[];
  outputs: Output[];
  laborCosts: LaborCost[];
}
