import {Action} from '@ngrx/store';
import {Item} from '../../gear-grid-logic/item';

export enum GearGridActionTypes {
  LoadGearGrids = '[GearGrid] Load GearGrids',
  SetItem = '[GearGrid] SetItem'
}

export class LoadGearGrids implements Action {
  readonly type = GearGridActionTypes.LoadGearGrids;
}

export class SetItem implements Action {
  readonly type = GearGridActionTypes.SetItem;

  constructor(public item: Item, public position: number) {
  }

}

export type GearGridActions = LoadGearGrids | SetItem;
