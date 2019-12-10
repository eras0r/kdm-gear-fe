import {Item} from '../../gear-grid-logic/item';
import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';
import * as ItemActions from '../actions/item.actions';

export const FEATURE_NAME = 'items';

export interface ItemsFeatureState {
  items: Item[];
}

export const initialState: ItemsFeatureState = {
  items: []
};

const itemsReducer = createReducer(
  initialState,

  on(ItemActions.retrieveItemsSuccess, (state, {items}) => {
    return {
      ...state,
      items
    };
  })
);

export function reducer(state: ItemsFeatureState | undefined, action: Action) {
  return itemsReducer(state, action);
}

export const selectItemFeature = createFeatureSelector<ItemsFeatureState>(
  FEATURE_NAME
);
