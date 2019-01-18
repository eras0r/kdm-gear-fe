import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AddItem} from '../../actions/gear-grid.actions';
import {Item} from '../../../gear-grid-logic/item';
import {Observable} from 'rxjs';
import {getItems} from '../../reducers/gear-grid.selectors';
import {AppState} from '../../../reducers';

@Component({
  selector: 'kdm-gear-grid-container',
  templateUrl: './gear-grid-container.component.html',
  styleUrls: ['./gear-grid-container.component.css']
})
export class GearGridContainerComponent implements OnInit {

  items$: Observable<Item[]>;

  // TODO check why Store<GearGridFeatureState> does not work
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.items$ = this.store.pipe(select(getItems));
  }

  addItem(): void {
    const item = new Item(1, 'foo');
    this.store.dispatch(new AddItem(item));
  }

}
