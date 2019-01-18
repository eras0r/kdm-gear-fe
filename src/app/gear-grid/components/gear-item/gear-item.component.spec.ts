import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearItemComponent } from './gear-item.component';

describe('GearItemComponent', () => {
  let component: GearItemComponent;
  let fixture: ComponentFixture<GearItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
