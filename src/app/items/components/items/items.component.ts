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

  @Output() add = new EventEmitter<Item>();

  selectedItem: Item;

  constructor() {
  }

  ngOnInit() {
    if (this.items && this.items.length > 0) {
      this.selectedItem = this.items[0];
    }
  }

  addItem(): void {
    this.add.emit(this.selectedItem);
  }

}
