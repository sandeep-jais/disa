import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENV } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_url = ENV.API_URL;
  http = inject(HttpClient);
  constructor() { }

  get(path: string, options?: any) {
    return this.http.get(this.api_url + path, options);
  }
  
  post(path: string, payload:any) {
    return this.http.post(this.api_url + path, payload);
  }

  put(path: string, payload:any) {
    return this.http.put(this.api_url + path, payload);
  }

  patch(path: string, payload:any) {
    return this.http.patch(this.api_url + path, payload);
  }

  delete(path: string, payload:any) {
    return this.http.delete(this.api_url + path, payload);
  }
}
