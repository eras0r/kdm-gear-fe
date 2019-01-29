import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GearGridPageComponent} from './gear-grid-page.component';
import {Store} from '@ngrx/store';
import {ItemsContainerComponent} from '../../items/conatainers/items-container/items-container.component';
import {GearGridContainerComponent} from '../../gear-grid/containers/gear-grid-container/gear-grid-container.component';
import {ItemsComponent} from '../../items/components/items/items.component';
import {GearGridComponent} from '../../gear-grid/components/gear-grid/gear-grid.component';
import {TestingModule} from '../../../testing/utils';
import {GearItemComponent} from '../../gear-grid/components/gear-item/gear-item.component';

describe('GearGridPageComponent', () => {
  let component: GearGridPageComponent;
  let fixture: ComponentFixture<GearGridPageComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        GearGridPageComponent,
        ItemsContainerComponent,
        ItemsComponent,
        GearItemComponent,
        GearGridContainerComponent,
        GearGridComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GearGridPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
