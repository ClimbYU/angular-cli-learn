import { TestBed, inject } from '@angular/core/testing';

import { BaMenuService } from './ba-menu.service';

describe('BaMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaMenuService]
    });
  });

  it('should be created', inject([BaMenuService], (service: BaMenuService) => {
    expect(service).toBeTruthy();
  }));
});
