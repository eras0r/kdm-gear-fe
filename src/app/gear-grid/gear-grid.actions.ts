import {createAction, props} from '@ngrx/store';
import {Item} from '../gear-grid-logic/item';

export const loadGearGrids = createAction(
    '[GearGrid] Load GearGrids'
);

export const addItem = createAction(
    '[GearGrid] AddItem',
    props<{ item: Item }>()
);
