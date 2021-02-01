import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FavoritesComponent} from './favorites.component';

const routes: Routes = [
  {path: '', component: FavoritesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    FavoritesComponent
  ]
})
export class FavoritesModule {

}
