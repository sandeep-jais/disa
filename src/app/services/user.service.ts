import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http= inject(HttpService);
  constructor() { }

  login(payload:any){
    return this.http.post('user/login', payload)
  }

  getUserInfo(){
    return JSON.parse(localStorage.getItem('user')||'{}');
  }

  isLogin(){
    return localStorage.getItem('token')? true: false;
  }
}
