import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromItem from './reducers/item.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ItemEffects} from './effects/item.effects';
import {ItemsService} from './items.service';
import {ItemsContainerComponent} from './conatainers/items-container/items-container.component';

@NgModule({
  declarations: [ItemsContainerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromItem.FEATURE_NAME, fromItem.reducer),
    EffectsModule.forFeature([ItemEffects])
  ],
  exports: [
    ItemsContainerComponent
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule {
}
