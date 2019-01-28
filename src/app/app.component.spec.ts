import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ItemsContainerComponent} from './items/conatainers/items-container/items-container.component';
import {GearGridContainerComponent} from './gear-grid/containers/gear-grid-container/gear-grid-container.component';
import {ItemsComponent} from './items/components/items/items.component';
import {GearGridComponent} from './gear-grid/components/gear-grid/gear-grid.component';
import {FormsModule} from '@angular/forms';
import {GearItemComponent} from './gear-grid/components/gear-item/gear-item.component';
import {MockStore, TestingModule} from '../testing/utils';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {GearGrid} from './gear-grid-logic/gear-grid';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
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
    store.setState(createMockState());

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

function createMockState(): AppState {
  return {
    gearGrid: {
      gearGrid: new GearGrid(3),
    },
    items: {
      items: []
    }
  };
}

