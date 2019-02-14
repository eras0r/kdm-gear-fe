import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Item} from '../../gear-grid-logic/item';
import {AffinityColor} from '../../gear-grid-logic/affinity-color';

@Injectable()
export class ItemsService {

  constructor() {
  }

  loadItems(): Observable<Item[]> {
    // TODO replace mock items with real items obtained from server through HttpCLient
    return of([
      new Item(1, 'test item 1', AffinityColor.Red, AffinityColor.Green, AffinityColor.Red, AffinityColor.Blue),
      new Item(2, 'test item 2')
    ]);
  }

}
