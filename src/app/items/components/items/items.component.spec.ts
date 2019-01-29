import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemsComponent} from './items.component';
import {TestingModule} from '../../../../testing/utils';
import {CoreModule} from '../../../core/core.module';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TestingModule
      ],
      declarations: [ItemsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
