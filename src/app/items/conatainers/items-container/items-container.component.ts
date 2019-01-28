import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ItemsFeatureState} from '../../reducers/item.reducer';
import {Observable} from 'rxjs';
import {Item} from '../../../gear-grid-logic/item';
import {getItems} from '../../reducers/item.selectors';
import {RetrieveItems} from '../../actions/item.actions';
import {AddItem} from '../../../gear-grid/actions/gear-grid.actions';

@Component({
  selector: 'kdm-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private store: Store<ItemsFeatureState>) {
  }

  ngOnInit() {
    this.items$ = this.store.pipe(select(getItems));
    this.store.dispatch(new RetrieveItems());
  }

  addItem(item: Item): void {
    this.store.dispatch(new AddItem(item));
  }

}
