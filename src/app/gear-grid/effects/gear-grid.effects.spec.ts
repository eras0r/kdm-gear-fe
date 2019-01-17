import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GearGridEffects } from './gear-grid.effects';

describe('GearGridEffects', () => {
  let actions$: Observable<any>;
  let effects: GearGridEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GearGridEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GearGridEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
