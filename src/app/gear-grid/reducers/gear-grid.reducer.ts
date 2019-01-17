import { Action } from '@ngrx/store';
import { GearGridActions, GearGridActionTypes } from '../actions/gear-grid.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: GearGridActions): State {
  switch (action.type) {

    case GearGridActionTypes.LoadGearGrids:
      return state;


    default:
      return state;
  }
}
