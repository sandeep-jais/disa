import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  http= inject(HttpService);
  constructor() { }

  uploadMedia(payload:any){
    return this.http.post('media/upload', payload)
  }

}
