import {UpgradeModule} from './upgrade-module';
import {signal, WritableSignal} from '@angular/core';
import {upgradeModules} from '../../assets/data/upgrade-modules';

export interface ICraftingTable {
  name: string;
  nameID: string;
  upgradeModuleType: string;
  hidden: boolean;
  imageFile?: string;
  xPos?: number;
  yPos?: number;
}


export class CraftingTable {
  name: WritableSignal<string>;
  hidden: WritableSignal<boolean>;
  selectedUpgrade: WritableSignal<UpgradeModule>;
  nameID: string;
  upgradeModuleType: string;
  availableUpgrades?: UpgradeModule[];
  imageFile?: string;
  xPos?: number;
  yPos?: number;

  constructor(table: ICraftingTable) {
    this.name = signal(table.name);
    this.hidden = signal(table.hidden);
    this.nameID = table.nameID;
    this.upgradeModuleType = table.upgradeModuleType;
    this.availableUpgrades = this.getAvailableUpgrades(table.upgradeModuleType);
    this.selectedUpgrade = signal(this.availableUpgrades[0]);
    this.imageFile = table.imageFile;
    this.xPos = table.xPos;
    this.yPos = table.yPos;
  }

  getAvailableUpgrades(upgradeModuleType: string): UpgradeModule[] {
    const availableUpgrades: UpgradeModule[] = [];
    for (let upgrade of upgradeModules.values()) {
      if (upgrade.typeNameID === upgradeModuleType) {
        availableUpgrades.push(upgrade);
      }
    }

    return availableUpgrades;
  }
}

