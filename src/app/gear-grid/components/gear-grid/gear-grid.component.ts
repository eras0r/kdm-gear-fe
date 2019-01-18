import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../gear-grid-logic/item';

@Component({
  selector: 'kdm-gear-grid',
  templateUrl: './gear-grid.component.html',
  styleUrls: ['./gear-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GearGridComponent implements OnInit {

  @Input() items: Item[];

  constructor() {
  }

  ngOnInit() {
  }

}
