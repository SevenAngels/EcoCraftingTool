import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public imageBaseUrl: string;
  public imageTemplateUrl: string;

  constructor() {
    this.imageBaseUrl = environment.imageBaseUrl;
    this.imageTemplateUrl = this.imageBaseUrl + '32px-template.png';
  }
}
