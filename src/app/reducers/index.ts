import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGearGrid from '../gear-grid/reducers/gear-grid.reducer';
import {from} from 'rxjs';
import {GearGridFeatureState} from '../gear-grid/reducers/gear-grid.reducer';

export interface AppState {
  gearGrid: fromGearGrid.GearGridFeatureState;
}

export const reducers: ActionReducerMap<AppState> = {
  gearGrid: fromGearGrid.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
