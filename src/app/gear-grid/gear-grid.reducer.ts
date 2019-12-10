import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';
import {GearGrid} from '../gear-grid-logic/gear-grid';
import * as GearGridActions from './gear-grid.actions';
import {Item} from '../gear-grid-logic/item';

export const FEATURE_NAME = 'gearGrid';

export interface GearGridFeatureState {
  gearGrid: GearGrid;
  test: number;
  item: Item;
}

export const initialState: GearGridFeatureState = {
  gearGrid: new GearGrid(3),
  test: 0,
  item: new Item(1)
};

const gearGridReducer = createReducer(
  initialState,

  on(GearGridActions.loadGearGrids, state => state),
  on(GearGridActions.addItem, (state, {item}) => {
    const newState = {
      ...state,
      gearGrid: Object.assign(new GearGrid(state.gearGrid.size), state.gearGrid), // copy gearGrid object
      test: 42,
      item: {
        ...state.item, // deep copy item object
        id: 42
      }
    };

    // copy gearGrid.items array and add new item to it then assign to newState.gearGrid.items
    newState.gearGrid.items = [
      ...state.gearGrid.items,
      item
    ];

    return newState;
  }),
);

export function reducer(state: GearGridFeatureState | undefined, action: Action) {
  return gearGridReducer(state, action);
}

export const selectGearGridFeature = createFeatureSelector<GearGridFeatureState>(
  FEATURE_NAME
);
