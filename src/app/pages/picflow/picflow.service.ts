import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PicflowService {
  pexelsAPIKey = '563492ad6f9170000100000161ce657256ed4002b05b94a3cef615b3';
  httpOptions= {
    headers: new HttpHeaders({
      'Authorization': this.pexelsAPIKey
    })
  }
  constructor(private http: HttpClient) { }

  getCuratedPhotos$() {
    return this.http
      .get('https://api.pexels.com/v1/curated?per_page=20&page=1', this.httpOptions)
  }
}
