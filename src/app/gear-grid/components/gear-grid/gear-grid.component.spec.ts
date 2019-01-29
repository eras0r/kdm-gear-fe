import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GearGridComponent} from './gear-grid.component';
import {GearItemComponent} from '../gear-item/gear-item.component';
import {TestingModule} from '../../../../testing/utils';

describe('GearGridComponent', () => {
  let component: GearGridComponent;
  let fixture: ComponentFixture<GearGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        GearGridComponent,
        GearItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
