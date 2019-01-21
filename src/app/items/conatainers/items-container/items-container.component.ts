import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ItemsFeatureState} from '../../reducers/item.reducer';
import {Observable} from 'rxjs';
import {Item} from '../../../gear-grid-logic/item';
import {getItems} from '../../reducers/item.selectors';
import {RetrieveItems} from '../../actions/item.actions';

@Component({
  selector: 'kdm-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private store: Store<ItemsFeatureState>) {
    this.items$ = this.store.pipe(select(getItems));
  }

  ngOnInit() {
    this.store.dispatch(new RetrieveItems());
  }

}
