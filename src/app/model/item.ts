import {signal, WritableSignal} from '@angular/core';

export interface IItem {

  name: string;
  nameID: string;
  tag: boolean;
  price?: number;
  imageFile?: string;
  xPos?: number;
  yPos?: number;
  filter?: string;
}

export class Item {
  name: WritableSignal<string>;
  price: WritableSignal<number>;
  nameID: string;
  tag: boolean;
  imageFile?: string;
  xPos?: number;
  yPos?: number;
  filter?: string;


  constructor(item: IItem) {
    this.name = signal(item.name);
    this.price = signal(item.price ?? 0);
    this.nameID = item.nameID;
    this.tag = item.tag;
    this.imageFile = item.imageFile;
    this.xPos = item.xPos;
    this.yPos = item.yPos;
    this.filter = item.filter;
  }
}
