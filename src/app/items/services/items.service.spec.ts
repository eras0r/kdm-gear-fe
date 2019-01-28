import {TestBed} from '@angular/core/testing';

import {ItemsService} from './items.service';

describe('ItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    // TODO register provided service here hence 'providedIn' does not seem work in conjunction with ngrx effects (circular dependency)
    providers: [
      ItemsService
    ]
  }));

  it('should be created', () => {
    const service: ItemsService = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });
});
