import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearGridComponent } from './gear-grid.component';

describe('GearGridComponent', () => {
  let component: GearGridComponent;
  let fixture: ComponentFixture<GearGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearGridComponent ]
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
