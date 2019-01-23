import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GearGridContainerComponent} from './gear-grid-container.component';
import {Store, StoreModule} from '@ngrx/store';
import {GearGridComponent} from '../../components/gear-grid/gear-grid.component';
import {GearItemComponent} from '../../components/gear-item/gear-item.component';

describe('GearGridContainerComponent', () => {
  let component: GearGridContainerComponent;
  let fixture: ComponentFixture<GearGridContainerComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [
        GearGridContainerComponent,
        GearGridComponent,
        GearItemComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GearGridContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
