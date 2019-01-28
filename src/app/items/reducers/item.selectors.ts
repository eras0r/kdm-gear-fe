import {createSelector} from '@ngrx/store';
import {ItemsFeatureState, selectItemFeature} from './item.reducer';

export const getItems = createSelector(
  selectItemFeature,
  (state: ItemsFeatureState) => state.items
);
