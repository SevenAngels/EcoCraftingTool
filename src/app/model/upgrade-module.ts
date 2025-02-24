import {signal, WritableSignal} from '@angular/core';

export interface IUpgradeModule {
  name: string;
  nameID: string;
  typeNameID: string;
  modifier: number;
}

export class UpgradeModule {
  name: WritableSignal<string>;
  nameID: string;
  typeNameID: string;
  modifier: number;


  constructor(module: IUpgradeModule) {
    this.name = signal(module.name);
    this.nameID = module.nameID;
    this.typeNameID = module.typeNameID;
    this.modifier = module.modifier;
  }
}
