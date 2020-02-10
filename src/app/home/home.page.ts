import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public loginForm = new FormGroup({
    username: new FormControl('test1', Validators.compose([Validators.required])),
    password: new FormControl('test1', Validators.compose([Validators.required])),
  });

  doLogin() {
    console.log(`doLogin ${this.loginForm.value.username}`);
    this.loginServices.doLogin(
      this.loginForm.value.username,
      this.loginForm.value.password).then((res) => {
        console.log('result from service login', res);
        sessionStorage.setItem('token', res.jwt);
      }).catch(err => {
        console.log('error from service login', err);
      });
  }

  doSignUp(){
      this.router.navigateByUrl('/signup');
  }

  constructor(public router: Router, public loginServices: LoginService) {
  }
}





