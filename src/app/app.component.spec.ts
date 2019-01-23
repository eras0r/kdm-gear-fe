import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ItemsContainerComponent} from './items/conatainers/items-container/items-container.component';
import {GearGridContainerComponent} from './gear-grid/containers/gear-grid-container/gear-grid-container.component';
import {ItemsComponent} from './items/components/items/items.component';
import {GearGridComponent} from './gear-grid/components/gear-grid/gear-grid.component';
import {FormsModule} from '@angular/forms';
import {GearItemComponent} from './gear-grid/components/gear-item/gear-item.component';
import {StoreModule} from '@ngrx/store';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        AppComponent,
        ItemsContainerComponent,
        ItemsComponent,
        GearItemComponent,
        GearGridContainerComponent,
        GearGridComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kdm-gear'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kdm-gear');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to kdm-gear!');
  });

});
