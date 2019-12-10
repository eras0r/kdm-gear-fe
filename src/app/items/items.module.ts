import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromItem from './item.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ItemEffects} from './item.effects';
import {ItemsService} from './services/items.service';
import {ItemsContainerComponent} from './conatainers/items-container/items-container.component';
import {ItemsComponent} from './components/items/items.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemsComponent
  ],
  imports: [
    SharedModule,
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
