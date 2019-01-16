import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  nasaAPIKey = 'aUJbhM16lHtAyFXZt8c40qpF61YqHJOJNKJprBWx';

  constructor(private http: HttpClient) { }

  getApod$(): Observable<Object> {
    return this.http
      .get('https://api.nasa.gov/planetary/apod?api_key='+this.nasaAPIKey);
  }
}
