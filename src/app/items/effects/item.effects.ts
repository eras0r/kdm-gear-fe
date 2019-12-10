import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ItemsService} from '../services/items.service';
import {of} from 'rxjs';
import * as ItemActions from '../actions/item.actions';

@Injectable()
export class ItemEffects {

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ItemActions.retrieveItems),
      switchMap(() =>
        this.itemService.loadItems().pipe(
          map((items) => ItemActions.retrieveItemsSuccess({items})),
          catchError((error) => of(ItemActions.retrieveItemsError({error})))
        )
      )
    );
  });

  constructor(private actions$: Actions, private itemService: ItemsService) {
  }
}
