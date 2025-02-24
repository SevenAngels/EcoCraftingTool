import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Skill} from '../model/skill';
import {CraftingTable} from '../model/crafting-table';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly SKILL_SPRITE_SIZE = 32;
  readonly TABLE_SPRITE_SIZE = 32;
  readonly ITEM_SPRITE_SIZE = 32;

  public imageBaseUrl: string;
  public imageTemplateUrl: string;

  constructor() {
    this.imageBaseUrl = environment.imageBaseUrl;
    this.imageTemplateUrl = this.imageBaseUrl + '32px-template.png';
  }

  getSpriteImageUrl(nameID: string, imageFile: string): string {
    if (nameID.localeCompare('LightBulbItem') === 0) {
      return this.imageBaseUrl + 'lightbulb.png';
    } else {
      return this.imageBaseUrl + imageFile;
    }
  }

  getProfitSpriteImageUrl(): string {
    return this.imageBaseUrl + 'UI_Icons_00.png';
  }

  getCalorieSpriteImageUrl(): string {
    return this.imageBaseUrl + 'UI_Icons_00.png';
  }

  getSpritePosition(xPos: number, yPos: number, size: number, imageFile: string): string {
    if (imageFile?.includes('UI_Icons_Baked_1')) {
      return `-${xPos * size + xPos * .5}px -${yPos * size + yPos * .5}px`;
    } else if (imageFile?.includes('UI_Icons')) {
      return `-${xPos * size}px -${yPos * size}px`;
    } else if (imageFile?.includes('skill-icons-sprite')) {
      return `-${xPos * size}px -${yPos * size}px`;
    }

    return '0px 0px';
  }

  getSpriteBackgroundSize(itemNameID: string, imageFile: string): string {
    if (itemNameID.localeCompare('LightBulbItem') === 0) {
      return '32px';
    } else if ('UI_Icons_Baked_0.png'.localeCompare(imageFile) === 0 || 'UI_Icons_Baked_1.png'.localeCompare(imageFile) === 0) {
      return '2048px';
    } else if (imageFile?.includes('UI_Icons')) {
      return '512px';
    } else if ('skill-icons-sprite.png'.localeCompare(imageFile) === 0) {
      return '256px';
    }

    return '32px';
  }

  getLargeSpriteBackgroundSize(itemNameID: string, imageFile: string): string {
    return `${parseInt(this.getSpriteBackgroundSize(itemNameID, imageFile)) * 4}px`
  }

  getSpriteCssFilter(filter?: string): string {
    return (filter != undefined ? filter : '');
  }

  getImgStyle(nameID: string, imageFile: string, xPos: number, yPos: number, size: number, filter?: string): any {
    return {
      'background': `url(${this.getSpriteImageUrl(nameID, imageFile)}) ${this.getSpritePosition(xPos, yPos, size, imageFile)} / ${this.getSpriteBackgroundSize(nameID, imageFile)} no-repeat !important`,
      'filter': `${this.getSpriteCssFilter(filter)} !important`
    }
  }

  getLargeImgStyle(nameID: string, imageFile: string, xPos: number, yPos: number, size: number, filter: string): any {
    return {
      'background': `url(${this.getSpriteImageUrl(nameID, imageFile)}) ${this.getSpritePosition(xPos, yPos, size, imageFile)} /
      ${this.getLargeSpriteBackgroundSize(nameID, imageFile)} no-repeat`,
      'filter': `${this.getSpriteCssFilter(filter)}`
    }
  }

  getProfitImgStyle(): any {
    return {
      'background': `url(${this.getProfitSpriteImageUrl()}) -320px -384px / 512px no-repeat`
    }
  }

  getCalorieImgStyle(): any {
    return {
      'background': `url(${this.getCalorieSpriteImageUrl()}) -416px -160px / 512px no-repeat`
    }
  }

  getTableImgStyle(table: CraftingTable): any {
    if (table.imageFile == null || table.xPos == null || table.yPos == null) {
      return null;
    }
    return this.getImgStyle(table.nameID, table.imageFile, table.xPos, table.yPos, this.TABLE_SPRITE_SIZE, '');
  }

  getSkillImgStyle(skill: Skill): any {
    if (skill.imageFile == null || skill.xPos == null || skill.yPos == null) {
      return null;
    }
    return this.getImgStyle(skill.nameID, skill.imageFile, skill.xPos, skill.yPos, this.SKILL_SPRITE_SIZE, '');
  }

  getItemImgStyle(item: Item) {
    if (item.imageFile == null || item.xPos == null || item.yPos == null) {
      return null;
    }
    return this.getImgStyle(item.nameID, item.imageFile, item.xPos, item.yPos, this.ITEM_SPRITE_SIZE, item.filter);
  }
}
