import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Login2Service {
  constructor(public http: HttpClient) { }
  getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return headers;
  }
  doSignUp(username: string, pwd: string): Promise<any> {
    const body = `username=${username}&pwd=${pwd}`;
    return new Promise((resolve, reject) => {
      this.http.post(environment.baseUrl + '/signup', body, { headers: this.getHeader()})
      .subscribe((res: any) => {
        console.log('res doSignUp', res);
        if (res.success){
          resolve(res);
        } else {
          reject(res);
        }
      }, (err) => {
        reject(err);
      });
    });
  }
}