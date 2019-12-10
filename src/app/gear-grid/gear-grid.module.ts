import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromGearGrid from './gear-grid.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GearGridEffects} from './gear-grid.effects';
import {GearGridContainerComponent} from './containers/gear-grid-container/gear-grid-container.component';
import {GearItemComponent} from './components/gear-item/gear-item.component';
import {GearGridComponent} from './components/gear-grid/gear-grid.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    GearGridContainerComponent,
    GearItemComponent,
    GearGridComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(fromGearGrid.FEATURE_NAME, fromGearGrid.reducer),
    EffectsModule.forFeature([GearGridEffects])
  ],
  exports: [
    GearGridContainerComponent
  ]
})
export class GearGridModule {
}
