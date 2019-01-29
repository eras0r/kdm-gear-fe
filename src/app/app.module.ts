import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MaterialModule} from './material/material.module';
import {AppComponent} from './app.component';
import {metaReducers, reducers} from './reducers';
import {environment} from '../environments/environment';
import {GearGridModule} from './gear-grid/gear-grid.module';
import {ItemsModule} from './items/items.module';
import {AppRoutingModule} from './app-routing.module';
import {GearGridPageComponent} from './containers/gear-grid-page/gear-grid-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GearGridPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GearGridModule,
    ItemsModule,

    // TODO use CoreModule to init these
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
