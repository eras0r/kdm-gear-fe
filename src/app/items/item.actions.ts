import {createAction, props} from '@ngrx/store';
import {Item} from '../gear-grid-logic/item';

export const retrieveItems = createAction(
  '[Item] Retrieve Items'
);

export const retrieveItemsSuccess = createAction(
  '[Item] Retrieve Items Success',
  props<{ items: Item[] }>()
);

export const retrieveItemsError = createAction(
  '[Item] Retrieve Items Error',
  props<{ error: any }>()
);
