import {Recipe} from '../recipe';

export class StoredOutput {
  id: string;

  /**
   * Base price of the recipe
   */
  bp: string;

  /**
   * Cost of the recipe
   */
  pr: string;

  constructor(recipe: Recipe) {
    this.id = recipe.nameID;
    this.bp = recipe.basePrice ? recipe.basePrice.toFixed(2) : '0';
    this.pr = recipe.price ? recipe.price.toFixed(2) : '0';
  }
}
