import {Injectable, NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ActionsSubject, ReducerManager, StateObservable, Store, StoreModule} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';

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

  setState(nextState: T) {
    console.log('next state: ', nextState);
    this.stateSubject.next(nextState);
  }
}

export function provideMockStore() {
  return {
    provide: Store,
    useClass: MockStore
  };
}

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterTestingModule,
    // SharedModule, // TODO shared module as soon as it's available
    StoreModule.forRoot({})
  ],
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
    // SharedModule, // TODO shared module as soon as it's available
  ],
  providers: [provideMockStore()]
})
export class TestingModule {
  constructor() {
  }
}