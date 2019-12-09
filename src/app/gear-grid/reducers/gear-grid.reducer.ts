import {GearGridActions, GearGridActionTypes} from '../actions/gear-grid.actions';
import {GearGrid} from '../../gear-grid-logic/gear-grid';
import {createFeatureSelector} from '@ngrx/store';

export const FEATURE_NAME = 'gearGrid';

export interface GearGridFeatureState {
  gearGrid: GearGrid;
}

export const initialState: GearGridFeatureState = {
  gearGrid: new GearGrid(3),
};

export function reducer(state = initialState, action: GearGridActions): GearGridFeatureState {
  switch (action.type) {

    case GearGridActionTypes.LoadGearGrids:
      return state;
    case GearGridActionTypes.AddItem:
      const newState = {
        ...state,
        gearGrid: Object.assign(new GearGrid(state.gearGrid.size), state.gearGrid) // copy gearGrid object
      };

      // copy gearGrid.items array and add new item to it then assign to newState.gearGrid.items
      newState.gearGrid.items = [
        ...state.gearGrid.items,
        action.item
      ];

      return newState;
    default:
      return state;
  }
}

export const selectGearGridFeature = createFeatureSelector<GearGridFeatureState>(
  FEATURE_NAME
);
