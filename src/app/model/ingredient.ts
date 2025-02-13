import {Item} from './item';

export interface Ingredient {
  item: Item;
  quantity: number;
  reducible: boolean;
  price?: number;
}
