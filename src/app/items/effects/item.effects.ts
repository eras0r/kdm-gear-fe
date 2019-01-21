import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ItemActionTypes, RetrieveItems, RetrieveItemsError, RetrieveItemsSuccess} from '../actions/item.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ItemsService} from '../items.service';
import {of} from 'rxjs';

@Injectable()
export class ItemEffects {

  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(ItemActionTypes.RetrieveItems),
    switchMap((action: RetrieveItems) =>
      this.itemService.loadItems().pipe(
        map((response) => new RetrieveItemsSuccess(response)),
        catchError((error) => of(new RetrieveItemsError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private itemService: ItemsService) {
  }
}
