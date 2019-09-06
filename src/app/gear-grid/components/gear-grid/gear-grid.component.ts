import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../../gear-grid-logic/item';
import {DragulaService} from 'ng2-dragula';
import {Subscription} from 'rxjs';

@Component({
  selector: 'kdm-gear-grid',
  templateUrl: './gear-grid.component.html',
  styleUrls: ['./gear-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GearGridComponent implements OnInit, OnDestroy {

  @Input() items: Item[];

  subs = new Subscription();

  constructor(private dragulaService: DragulaService) {
    const groupName = 'ITEMS';

    this.subs.add(this.dragulaService.drag(groupName)
      .subscribe(({name, el, source}) => {
        // ...
        console.info('- drag -');
        console.log('name: ', name);
        console.log('el: ', el);
      })
    );
    this.subs.add(this.dragulaService.drop(groupName)
      .subscribe(({name, el, target, source, sibling}) => {
        // ...
        console.info('- drop -');
        console.log('name: ', name);
        console.log('el: ', el);
        console.log('target: ', target);
        console.log('source: ', source);
        console.log('sibling: ', sibling);
      })
    );
    // some events have lots of properties, just pick the ones you need
    this.subs.add(this.dragulaService.dropModel(groupName)
      // WHOA
      // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
        .subscribe(({sourceModel, targetModel, source, item, targetIndex}) => {
          // ...
          console.info('- dropModel -');
          console.log('sourceModel: ', sourceModel);
          console.log('targetModel: ', targetModel);
          console.log('item: ', item);
          console.log('targetIndex: ', targetIndex);
          // targetModel.splice(targetIndex+1, 1);
          debugger;
        })
    );

    // You can also get all events, not limited to a particular group
    // this.subs.add(this.dragulaService.drop()
    //   .subscribe(({name, el, target, source, sibling}) => {
    //     // ...
    //   })
    // );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
  }

}
