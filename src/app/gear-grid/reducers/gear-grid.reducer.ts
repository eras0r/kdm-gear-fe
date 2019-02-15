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
    case GearGridActionTypes.LoadGearGrids: {
      return state;
    }
    case GearGridActionTypes.SetItem: {
      const newState = {
        ...state,
      };

      newState.gearGrid.items = [...state.gearGrid.items];
      newState.gearGrid.items[action.position] = action.item;

      return newState;
    }
    default:
      return state;
  }
}

export const selectGearGridFeature = createFeatureSelector<GearGridFeatureState>(
  FEATURE_NAME
);
