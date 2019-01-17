import { Action } from '@ngrx/store';

export enum GearGridActionTypes {
  LoadGearGrids = '[GearGrid] Load GearGrids'
}

export class LoadGearGrids implements Action {
  readonly type = GearGridActionTypes.LoadGearGrids;
}

export type GearGridActions = LoadGearGrids;
