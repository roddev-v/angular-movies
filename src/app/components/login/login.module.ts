import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
