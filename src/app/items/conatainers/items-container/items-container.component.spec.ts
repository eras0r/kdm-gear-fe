import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemsContainerComponent} from './items-container.component';
import {Store} from '@ngrx/store';
import {ItemsComponent} from '../../components/items/items.component';
import {MockStore, TestingModule} from '../../../../testing/utils';
import {AppState} from '../../../core/core.state';
import {CoreModule} from '../../../core/core.module';

type ItemsFeatureStateSlice = Pick<AppState, 'items'>;

describe('ItemsContainerComponent', () => {
  let component: ItemsContainerComponent;
  let fixture: ComponentFixture<ItemsContainerComponent>;
  let store: MockStore<ItemsFeatureStateSlice>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TestingModule
      ],
      declarations: [
        ItemsContainerComponent,
        ItemsComponent
      ]
    });

    await TestBed.compileComponents();

    store = TestBed.get(Store);
    store.setState(createMockState());

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

function createMockState(): ItemsFeatureStateSlice {
  return {
    items: {
      items: []
    }
  };
}
