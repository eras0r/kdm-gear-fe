import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromGearGrid from './reducers/gear-grid.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GearGridEffects} from './effects/gear-grid.effects';
import {GearGridContainerComponent} from './containers/gear-grid-container/gear-grid-container.component';
import {GearItemComponent} from './components/gear-item/gear-item.component';
import {GearGridComponent} from './components/gear-grid/gear-grid.component';
import {SharedModule} from '../shared/shared.module';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    GearGridContainerComponent,
    GearItemComponent,
    GearGridComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(fromGearGrid.FEATURE_NAME, fromGearGrid.reducer),
    EffectsModule.forFeature([GearGridEffects]),
    DragulaModule
  ],
  exports: [
    GearGridContainerComponent
  ]
})
export class GearGridModule {
}
