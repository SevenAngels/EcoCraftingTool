import {TestBed} from '@angular/core/testing';

import {ReleaseNotesService} from './release-notes.service';

describe('ReleaseNotesService', () => {
  let service: ReleaseNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReleaseNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
