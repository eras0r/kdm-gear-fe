import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearGridPageComponent } from './gear-grid-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('GearGridPageComponent', () => {
  let component: GearGridPageComponent;
  let fixture: ComponentFixture<GearGridPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ GearGridPageComponent ]
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
