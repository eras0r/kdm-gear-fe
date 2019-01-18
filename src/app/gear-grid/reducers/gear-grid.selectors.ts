import {createSelector} from '@ngrx/store';
import {GearGridFeatureState, selectGearGridFeature} from './gear-grid.reducer';

export const getGearGridState = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state
);

export const getGearGrid = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state.gearGrid
);

export const getItems = createSelector(
  selectGearGridFeature,
  (state: GearGridFeatureState) => state.gearGrid.items
);
