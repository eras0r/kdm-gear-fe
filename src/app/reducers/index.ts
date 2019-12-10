import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromGearGrid from '../gear-grid/gear-grid.reducer';
import * as fromItems from '../items/reducers/item.reducer';

export interface AppState {
  gearGrid: fromGearGrid.GearGridFeatureState;
  items: fromItems.ItemsFeatureState;
}

export const reducers: ActionReducerMap<AppState> = {
  gearGrid: fromGearGrid.reducer,
  items: fromItems.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
