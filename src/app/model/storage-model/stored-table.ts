import {CraftingTable} from '../crafting-table';

export class StoredTable {
  id: string;

  /**
   * Upgrade id that is selected
   */
  up: string;

  constructor(table: CraftingTable) {
    this.id = table.nameID;
    this.up = table.selectedUpgrade().nameID;
  }
}
