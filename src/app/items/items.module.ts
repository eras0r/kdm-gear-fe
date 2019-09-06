import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromItem from './reducers/item.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ItemEffects} from './effects/item.effects';
import {ItemsService} from './services/items.service';
import {ItemsContainerComponent} from './conatainers/items-container/items-container.component';
import {ItemsComponent} from './components/items/items.component';
import {SharedModule} from '../shared/shared.module';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    ItemsContainerComponent,
    ItemsComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(fromItem.FEATURE_NAME, fromItem.reducer),
    EffectsModule.forFeature([ItemEffects]),
    DragulaModule
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
