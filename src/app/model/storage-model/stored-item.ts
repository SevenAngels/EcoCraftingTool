import {Item} from '../item';

export class StoredItem {
  id: string;

  /**
   * Price of the ingredient
   */
  pr: number;

  constructor(item: Item) {
    this.id = item.nameID;
    this.pr = item.price();
  }
}
