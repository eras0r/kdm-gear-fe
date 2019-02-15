import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../gear-grid-logic/item';

@Component({
  selector: 'kdm-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsComponent implements OnInit {

  @Input() items: Item[];

  @Output() add = new EventEmitter<{ item: Item, position: number }>();

  selectedItem: Item;

  positions: number[];

  position: number;

  constructor() {
    this.positions = [];
    for (let pos = 0; pos < 9; pos++) {
      this.positions.push(pos);
    }

    this.position = this.positions[0];
  }

  ngOnInit() {
    if (this.items && this.items.length > 0) {
      this.selectedItem = this.items[0];
    }
  }

  setItem(): void {
    this.add.emit({item: this.selectedItem, position: this.position});
  }

}
