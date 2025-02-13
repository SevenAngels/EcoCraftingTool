export interface Skill {
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
