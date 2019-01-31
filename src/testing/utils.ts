import {Injectable, NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ActionsSubject, ReducerManager, StateObservable, Store, StoreModule} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../app/shared/shared.module';
import {AppState} from '../app/reducers';
import {GearGrid} from '../app/gear-grid-logic/gear-grid';
import {CoreModule} from '../app/core/core.module';

@Injectable()
export class MockStore<T> extends Store<T> {
  private stateSubject = new BehaviorSubject<T>({} as T);

  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager
  ) {
    super(state$, actionsObserver, reducerManager);
    this.source = this.stateSubject.asObservable();
  }

  setState(nextState: T): void {
    this.stateSubject.next(nextState);
  }

}

@Injectable()
export class MockAppStore extends MockStore<AppState> {

  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager
  ) {
    super(state$, actionsObserver, reducerManager);
    this.setState(this.createEmptyAppState());
  }

  private createEmptyAppState(): AppState {
    return {
      gearGrid: {
        gearGrid: new GearGrid(3),
      },
      items: {
        items: []
      }
    };
  }

}

export function provideMockStore() {
  return {
    provide: Store,
    useClass: MockAppStore
  };
}

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterTestingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({})
  ],
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
    SharedModule,
  ],
  providers: [provideMockStore()]
})
export class TestingModule {
  constructor() {
  }
}
