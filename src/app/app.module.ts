import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouterModule} from './app-router.module';
import {LoadGuard} from './guards/load.guard';
import {AuthGuard} from './guards/auth.guard';
import {MoviesComponent} from './components/movies/movies.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {SessionService} from './services/session.service';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {MovieResolver} from './services/resolvers/movie.resolver';
import {MoviesService} from './services/movies.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CollapseModule,
    HttpClientModule
  ],
  providers: [
    LoadGuard,
    AuthGuard,
    SessionService,
    MovieResolver,
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
