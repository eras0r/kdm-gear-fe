import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {GearGridModule} from './gear-grid/gear-grid.module';
import {ItemsModule} from './items/items.module';
import {AppRoutingModule} from './app-routing.module';
import {GearGridPageComponent} from './containers/gear-grid-page/gear-grid-page.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    GearGridPageComponent,
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    GearGridModule,

    // third party modules
    DragulaModule.forRoot(),

    // core and shared
    CoreModule,
    SharedModule,

    // features
    GearGridModule,
    ItemsModule,

    // app modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
