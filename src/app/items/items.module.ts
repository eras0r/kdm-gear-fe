import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromItem from './reducers/item.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ItemEffects} from './effects/item.effects';
import {ItemsService} from './services/items.service';
import {ItemsContainerComponent} from './conatainers/items-container/items-container.component';
import {ItemsComponent} from './components/items/items.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // TODO consider removing when using angular material
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
