import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromGearGrid from './reducers/gear-grid.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GearGridEffects} from './effects/gear-grid.effects';
import {GearGridContainerComponent} from './containers/gear-grid-container/gear-grid-container.component';

@NgModule({
  declarations: [GearGridContainerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromGearGrid.FEATURE_NAME, fromGearGrid.reducer),
    EffectsModule.forFeature([GearGridEffects])
  ],
  exports: [
    GearGridContainerComponent
  ]
})
export class GearGridModule {
}
