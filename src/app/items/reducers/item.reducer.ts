import {ItemActions, ItemActionTypes} from '../actions/item.actions';
import {Item} from '../../gear-grid-logic/item';
import {createFeatureSelector} from '@ngrx/store';

export const FEATURE_NAME = 'items';

export interface ItemsFeatureState {
  items: Item[];
}

export const initialState: ItemsFeatureState = {
  items: []
};

export function reducer(state = initialState, action: ItemActions): ItemsFeatureState {
  switch (action.type) {

    case ItemActionTypes.RetrieveItemsSuccess: {
      return {
        ...state,
        items: action.items
      };
    }
    default:
      return state;
  }
}

export const selectItemFeature = createFeatureSelector<ItemsFeatureState>(
  FEATURE_NAME
);
