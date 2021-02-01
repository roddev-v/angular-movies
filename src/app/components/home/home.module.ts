import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {MovieResolver} from '../../services/resolvers/movie.resolver';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';

const routes: Routes = [
  {path: '', resolve: [MovieResolver], component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: []
})
export class HomeModule {

}
