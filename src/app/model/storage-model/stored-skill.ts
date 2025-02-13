import {Skill} from '../skill';

export class StoredSkill {
  id: string;
  lvl: number;
  lav: boolean;

  constructor(skill: Skill) {
    this.id = skill.nameID;
    this.lvl = skill.level ? skill.level : 1;
    this.lav = skill.lavishChecked ? skill.lavishChecked : false;
  }
}
