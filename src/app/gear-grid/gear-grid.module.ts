import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGearGrid from './reducers/gear-grid.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GearGridEffects } from './effects/gear-grid.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('gearGrid', fromGearGrid.reducer),
    EffectsModule.forFeature([GearGridEffects])
  ]
})
export class GearGridModule { }
