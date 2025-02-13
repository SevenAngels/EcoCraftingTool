import {Recipe} from "./recipe";

export interface SubRecipe {
  recipeNameID: string;
  recipeName: string;
  recipePrice: number;
  recipe: Recipe;
}

export interface OutputDisplay {
  itemNameID: string;
  itemName: string;

  //Price PER OUTPUT ITEM
  itemPrice: number;
  subRecipes: SubRecipe[];

  imageFile?: string;
  xPos?: number;
  yPos?: number;
  filter?: string;
}
