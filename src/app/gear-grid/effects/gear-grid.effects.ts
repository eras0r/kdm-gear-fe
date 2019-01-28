import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GearGridActionTypes } from '../actions/gear-grid.actions';

@Injectable()
export class GearGridEffects {

  @Effect()
  loadGearGrids$ = this.actions$.pipe(ofType(GearGridActionTypes.LoadGearGrids));

  constructor(private actions$: Actions) {}
}
