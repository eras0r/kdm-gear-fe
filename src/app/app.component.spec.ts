import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ItemsContainerComponent} from './items/conatainers/items-container/items-container.component';
import {GearGridContainerComponent} from './gear-grid/containers/gear-grid-container/gear-grid-container.component';
import {ItemsComponent} from './items/components/items/items.component';
import {GearGridComponent} from './gear-grid/components/gear-grid/gear-grid.component';
import {GearItemComponent} from './gear-grid/components/gear-item/gear-item.component';
import {MockAppStore, TestingModule} from '../testing/utils';
import {Store} from '@ngrx/store';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;
  let store: MockAppStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        AppComponent,
        ItemsContainerComponent,
        ItemsComponent,
        GearItemComponent,
        GearGridContainerComponent,
        GearGridComponent
      ],
    });

    await TestBed.compileComponents();

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'kdm-gear'`, () => {
    expect(component.title).toEqual('kdm-gear');
  });

  it('should render title in a h1 tag', () => {
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to kdm-gear!');
  });

});


