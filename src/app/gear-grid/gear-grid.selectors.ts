import {createSelector} from '@ngrx/store';
import {GearGridFeatureState, selectGearGridFeature} from './gear-grid.reducer';
import {Item} from '../gear-grid-logic/item';

export const getGearGridState = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state
);

export const getGearGrid = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state.gearGrid
);

export const getItems = createSelector<GearGridFeatureState, GearGridFeatureState, Item[]>(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state.gearGrid.items
);

export const getTest = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state.test
);

export const getItem = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state.item
);
