import {signal, WritableSignal} from '@angular/core';

export interface ISkill {
  name: string;
  nameID: string;
  basicUpgrade: boolean;
  advancedUpgrade: boolean;
  modernUpgrade: boolean;
  lavishWorkspace: boolean;
  imageFile?: string;
  xPos?: number;
  yPos?: number;
  level?: number;
  lavishChecked?: boolean;
}

export class Skill {
  name: WritableSignal<string>;
  lavishChecked: WritableSignal<boolean>;
  level: WritableSignal<number>;

  nameID: string;
  basicUpgrade: boolean;
  advancedUpgrade: boolean;
  modernUpgrade: boolean;
  lavishWorkspace: boolean;
  imageFile?: string;
  xPos?: number;
  yPos?: number;


  constructor(skill: ISkill) {
    this.name = signal(skill.name);
    this.lavishChecked = signal(skill.lavishChecked ?? false);
    this.level = signal(skill.level ?? 1);

    // Initialize other fields from ISkill
    this.nameID = skill.nameID;
    this.basicUpgrade = skill.basicUpgrade;
    this.advancedUpgrade = skill.advancedUpgrade;
    this.modernUpgrade = skill.modernUpgrade;
    this.lavishWorkspace = skill.lavishWorkspace;
    this.imageFile = skill.imageFile;
    this.xPos = skill.xPos;
    this.yPos = skill.yPos;

  }
}
