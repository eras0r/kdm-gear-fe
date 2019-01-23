import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemsContainerComponent} from './items-container.component';
import {Store, StoreModule} from '@ngrx/store';
import {ItemsComponent} from '../../components/items/items.component';
import {FormsModule} from '@angular/forms';

describe('ItemsContainerComponent', () => {
  let component: ItemsContainerComponent;
  let fixture: ComponentFixture<ItemsContainerComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        ItemsContainerComponent,
        ItemsComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
