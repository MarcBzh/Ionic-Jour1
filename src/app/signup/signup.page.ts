import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login2Service } from './login2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    public signUpForm = new FormGroup({
        username: new FormControl('test1', Validators.compose([Validators.required])),
        password: new FormControl('test1', Validators.compose([Validators.required])),
      });

      doSignUp() {
        console.log(`doSingUp ${this.signUpForm.value.username}`);
        this.login2Services.doSignUp(
          this.signUpForm.value.username,
          this.signUpForm.value.password).then((res) => {
            console.log('result from service login', res);
            sessionStorage.setItem('token', res.jwt);
          }).catch(err => {
            console.log('error from service login', err);
          });
      }

  constructor(public router: Router, public login2Services: Login2Service) { }

  ngOnInit() {
  }

}
