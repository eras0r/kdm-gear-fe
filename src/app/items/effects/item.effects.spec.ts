import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {ItemEffects} from './item.effects';
import {ItemsService} from '../services/items.service';

describe('ItemEffects', () => {
  let actions$: Observable<any>;
  let effects: ItemEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemEffects,
        ItemsService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ItemEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
