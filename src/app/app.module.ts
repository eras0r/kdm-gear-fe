import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {GearGridModule} from './gear-grid/gear-grid.module';
import {ItemsModule} from './items/items.module';
import {AppRoutingModule} from './app-routing.module';
import {GearGridPageComponent} from './containers/gear-grid-page/gear-grid-page.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GearGridPageComponent,
  ],
  imports: [
    // angular
    BrowserModule,

    // core and shared
    SharedModule,

    // features
    GearGridModule,
    ItemsModule,

    // TODO use CoreModule to init these
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),

    // app modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
