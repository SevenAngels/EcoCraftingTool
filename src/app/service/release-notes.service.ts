import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Release} from '../model/release';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReleaseNotesService {

  readonly releases: WritableSignal<Release[]> = signal([]);

  constructor(httpClient: HttpClient) {
    httpClient.get<Release[]>(environment.releasesUrl).subscribe(releases => this.releases.set(releases));
  }

}
