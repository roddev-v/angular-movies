import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {SessionService} from '../../services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogInMode = true;
  form: FormGroup;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private sessionService: SessionService) {
  }

  toggleMode(): void {
    this.isLogInMode = !this.isLogInMode;
    if (this.isLogInMode) {
      this.form.removeControl('confirmPassword');
    } else {
      this.form.addControl('confirmPassword', new FormControl(undefined, [Validators.required]));
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.initAuthSubscription();
  }

  async onSubmit(): Promise<void> {
    const {username, password} = this.form.value;
    let user;
    if (!this.isLogInMode) {
      user = await this.firebaseAuth.auth.createUserWithEmailAndPassword(username, password);
    } else {
      user = await this.firebaseAuth.auth.signInWithEmailAndPassword(username, password);
    }
    this.sessionService.setUser(user);
  }

  private initAuthSubscription() {
    this.firebaseAuth.user.subscribe(async user => {
      if (user) {
        await this.router.navigate(['app']);
      } else {
        this.sessionService.clear();
      }
    });
  }

  private initForm() {
    this.form = new FormGroup({
      username: new FormControl(undefined, [Validators.required, Validators.email]),
      password: new FormControl(undefined, [Validators.minLength(6)])
    });
  }
}
