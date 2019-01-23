import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Item} from '../../../gear-grid-logic/item';
import {Observable} from 'rxjs';
import {getItems} from '../../reducers/gear-grid.selectors';
import {GearGridFeatureState} from '../../reducers/gear-grid.reducer';

@Component({
  selector: 'kdm-gear-grid-container',
  templateUrl: './gear-grid-container.component.html',
  styleUrls: ['./gear-grid-container.component.css']
})
export class GearGridContainerComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private store: Store<GearGridFeatureState>) {
  }

  ngOnInit() {
    this.items$ = this.store.pipe(select(getItems));
  }


}
