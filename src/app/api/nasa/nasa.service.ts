import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  nasaAPIKey = 'aUJbhM16lHtAyFXZt8c40qpF61YqHJOJNKJprBWx';

  constructor(private http: HttpClient) { }

  getApod() {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key='+this.nasaAPIKey);
  }
}
