import {Action} from '@ngrx/store';
import {Item} from '../../gear-grid-logic/item';

export enum GearGridActionTypes {
  LoadGearGrids = '[GearGrid] Load GearGrids',
  AddItem = '[GearGrid] AddItem'
}

export class LoadGearGrids implements Action {
  readonly type = GearGridActionTypes.LoadGearGrids;
}

export class AddItem implements Action {
  readonly type = GearGridActionTypes.AddItem;

  constructor(public item: Item) {
  }

}

export type GearGridActions = LoadGearGrids | AddItem;
