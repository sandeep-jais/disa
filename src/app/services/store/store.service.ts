import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  http= inject(HttpService);
  constructor() { }

  getAllStores(payload:any){
    return this.http.get('store/getAllStores', payload)
  }

}
