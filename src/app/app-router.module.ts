import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoadGuard} from './guards/load.guard';
import {AuthGuard} from './guards/auth.guard';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieResolver} from './services/resolvers/movie.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(l => l.LoginModule)},
  {
    path: 'app',
    canActivateChild: [AuthGuard],
    component: MoviesComponent,
    children: [
      {
        path: '',
        canLoad: [LoadGuard],
        loadChildren: () => import('./components/home/home.module').then(h => h.HomeModule)
      },
      {
        path: 'favorites',
        canLoad: [LoadGuard],
        loadChildren: () => import('./components/favorites/favorites.module').then(f => f.FavoritesModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
