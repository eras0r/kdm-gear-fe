import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsContainerComponent } from './items-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ItemsContainerComponent', () => {
  let component: ItemsContainerComponent;
  let fixture: ComponentFixture<ItemsContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ItemsContainerComponent ]
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
