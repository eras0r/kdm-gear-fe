import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GearGridContainerComponent} from './gear-grid-container.component';
import {Store} from '@ngrx/store';
import {GearGridComponent} from '../../components/gear-grid/gear-grid.component';
import {GearItemComponent} from '../../components/gear-item/gear-item.component';
import {MockStore, TestingModule} from '../../../../testing/utils';
import {GearGridFeatureState} from '../../reducers/gear-grid.reducer';
import {GearGrid} from '../../../gear-grid-logic/gear-grid';

describe('GearGridContainerComponent', () => {
  let component: GearGridContainerComponent;
  let fixture: ComponentFixture<GearGridContainerComponent>;
  let store: MockStore<GearGridFeatureState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        GearGridContainerComponent,
        GearGridComponent,
        GearItemComponent
      ]
    });

    await TestBed.compileComponents();

    store = TestBed.get(Store);
    store.setState(createMockState());

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(GearGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function createMockState(): GearGridFeatureState {
  return {
    gearGrid: new GearGrid(3)
  };
}
