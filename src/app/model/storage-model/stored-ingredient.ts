import {Item} from '../item';

export class StoredIngredient {
  id: string;

  /**
   * Price of the ingredient
   */
  pr: number;

  constructor(item: Item) {
    this.id = item.nameID;
    this.pr = item.price ? item.price : 0;
  }
}
