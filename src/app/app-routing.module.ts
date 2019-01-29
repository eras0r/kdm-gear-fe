import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GearGridPageComponent} from './containers/gear-grid-page/gear-grid-page.component';

const routes: Routes = [
  {
    path: 'gear-grid',
    component: GearGridPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/gear-grid'
  },
  // TODO route for page not found component
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
