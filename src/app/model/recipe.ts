import {Skill} from './skill';
import {CraftingTable} from './crafting-table';
import {Ingredient} from './ingredient';
import {Output} from './output';
import {signal, WritableSignal} from '@angular/core';

export interface IRecipe {
  name: string;
  nameID: string;
  skill?: Skill;
  level: number;
  labor: number;
  craftingTable?: CraftingTable;
  ingredients: Ingredient[];
  outputs: Output[];
  hidden: boolean;
  primaryOutput?: Output;

  //Price per primary output without profit
  basePrice?: number;

  //Price PER PRIMARY OUTPUT ITEM
  price?: number;
}

export class Recipe {
  name: WritableSignal<string>;
  basePrice: WritableSignal<number>;
  price: WritableSignal<number>;
  nameID: string;
  skill: Skill;
  level: number;
  labor: number;
  craftingTable: CraftingTable;
  ingredients: Ingredient[];
  outputs: Output[];
  primaryOutput?: Output;
  hidden: boolean;


  constructor(recipe: IRecipe) {
    this.name = signal(recipe.name);
    this.basePrice = signal(recipe.basePrice ?? 0);
    this.price = signal(recipe.price ?? 0);
    this.nameID = recipe.nameID;
    this.skill = recipe.skill as Skill;
    this.level = recipe.level;
    this.labor = recipe.labor;
    this.craftingTable = recipe.craftingTable as CraftingTable;
    this.ingredients = recipe.ingredients;
    this.outputs = recipe.outputs;
    this.primaryOutput = recipe.outputs.find(o => o.primary);
    this.hidden = recipe.hidden;
  }
}
