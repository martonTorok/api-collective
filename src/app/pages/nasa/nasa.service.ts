import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Apod, ApodAdapter } from 'src/app/models/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  nasaAPIKey = 'aUJbhM16lHtAyFXZt8c40qpF61YqHJOJNKJprBWx';

  constructor(private http: HttpClient,
              private adapter: ApodAdapter) { }

  getApod$(): Observable<Apod> {
    return this.http
      .get('https://api.nasa.gov/planetary/apod?api_key='+this.nasaAPIKey)
      .pipe(
        map((res:any) => this.adapter.adapt(res))
      );
  }
}
