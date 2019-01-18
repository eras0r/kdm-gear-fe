import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../gear-grid-logic/item';

@Component({
  selector: 'kdm-gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GearItemComponent implements OnInit {

  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

}
