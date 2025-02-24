import {TestBed} from '@angular/core/testing';

import {CraftingService} from './crafting.service';

describe('CraftingService', () => {
  let service: CraftingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
