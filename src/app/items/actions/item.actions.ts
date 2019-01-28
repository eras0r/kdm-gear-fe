import {Action} from '@ngrx/store';
import {Item} from '../../gear-grid-logic/item';

export enum ItemActionTypes {
  RetrieveItems = '[Item] Retrieve Items',
  RetrieveItemsSuccess = '[Item] Retrieve Items Success',
  RetrieveItemsError = '[Item] Retrieve Items Error'
}

export class RetrieveItems implements Action {
  readonly type = ItemActionTypes.RetrieveItems;
}

export class RetrieveItemsSuccess implements Action {
  readonly type = ItemActionTypes.RetrieveItemsSuccess;

  constructor(public items: Item[]) {

  }
}

export class RetrieveItemsError implements Action {
  readonly type = ItemActionTypes.RetrieveItemsError;

  constructor(public error: any) {

  }
}

export type ItemActions =
  RetrieveItems
  | RetrieveItemsSuccess
  | RetrieveItemsError;
