import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GearItemComponent} from './gear-item.component';
import {Item} from '../../../gear-grid-logic/item';
import {By} from '@angular/platform-browser';
import {TestingModule} from '../../../../testing/utils';

describe('GearItemComponent', () => {
  let component: GearItemComponent;
  let fixture: ComponentFixture<GearItemComponent>;
  const mockItem = new Item(1, 'test item');

  const getId = () => fixture.debugElement.query(By.css('.col-sm-4'));

  const getName = () => fixture.debugElement.query(By.css('.col-sm-8'));


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [GearItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearItemComponent);
    component = fixture.componentInstance;
    component.item = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the item\'s id', () => {
    expect(getId().nativeElement.textContent).toContain(mockItem.id);
  });

  it('should show the item\'s name', () => {
    expect(getName().nativeElement.textContent).toContain(mockItem.name);
  });

});
