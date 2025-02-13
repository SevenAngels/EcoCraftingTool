import {Item} from './item';

export interface Output {
  item: Item;
  quantity: number;
  reducible: boolean;
  primary: boolean;
}
