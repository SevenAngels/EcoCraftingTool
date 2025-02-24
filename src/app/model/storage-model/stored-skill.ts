import {Skill} from '../skill';

export class StoredSkill {
  id: string;
  lvl: number;
  lav: boolean;

  constructor(skill: Skill) {
    this.id = skill.nameID;
    this.lvl = skill.level();
    this.lav = skill.lavishChecked();
  }
}
