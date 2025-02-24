import {CraftingTable} from '../../../app/model/crafting-table';
import {tables} from '../crafting-tables';
import {Skill} from '../../../app/model/skill';
import {skills} from '../skills';
import {Item} from '../../../app/model/item';
import {items} from '../items';

export function getCraftingTableByNameID(nameID: string): CraftingTable {
  const table = tables.get(nameID);
  if (table === undefined) {
    console.error(`Crafting table ${nameID} not found`);
  }
  return table as CraftingTable;
}

export function getSkillByNameID(nameID: string): Skill {
  const skill = skills.get(nameID);
  if (skill === undefined) {
    console.error(`Skill ${nameID} not found`);
  }
  return skill as Skill;
}

export function getItemByNameID(nameID: string): Item {
  const item = items.get(nameID);
  if (item === undefined) {
    console.error(`Item ${nameID} not found`);
  }
  return item as Item;
}
