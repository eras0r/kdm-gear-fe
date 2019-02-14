import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../gear-grid-logic/item';
import {AffinityColor} from '../../../gear-grid-logic/affinity-color';

@Component({
  selector: 'kdm-gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GearItemComponent implements OnInit {

  @Input() item: Item;

  affinityColors = AffinityColor;

  constructor() {
  }

  ngOnInit() {
  }

  getAffinityColorClass(position: 'top' | 'left' | 'right' | 'bottom'): string {
    switch (position) {
      case 'top':
        return this.getAffinityColorClassInner(this.item.topAffinity);
      case 'left':
        return this.getAffinityColorClassInner(this.item.leftAffinity);
      case 'right':
        return this.getAffinityColorClassInner(this.item.rightAffinity);
      case 'bottom':
        return this.getAffinityColorClassInner(this.item.bottomAffinity);
      default:
        return '';
    }
  }

  private getAffinityColorClassInner(affinityColor: AffinityColor): string {
    switch (affinityColor) {
      case AffinityColor.Blue:
        return 'affinity-color-blue';
      case AffinityColor.Green:
        return 'affinity-color-green';
      case AffinityColor.Red:
        return 'affinity-color-red';
      default:
        return '';
    }
  }

}
