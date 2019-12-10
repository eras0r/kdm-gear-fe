import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ItemsFeatureState} from '../../item.reducer';
import {Observable} from 'rxjs';
import {Item} from '../../../gear-grid-logic/item';
import {getItems} from '../../item.selectors';
import {retrieveItems} from '../../item.actions';
import {addItem} from '../../../gear-grid/gear-grid.actions';

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
    this.store.dispatch(retrieveItems());
  }

  addItem(item: Item): void {
    this.store.dispatch(addItem({item}));
  }

}
