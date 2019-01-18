import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Weather, WeatherAdapter } from 'src/app/models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private openWeatherMapAPIKey = 'ce9dd870434db03941c9ddfa662d31b2';

  constructor(private http: HttpClient,
    private adapter: WeatherAdapter) { }

  getCurrentWeatherByCity$(city: string): Observable<Weather> {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=";
    return this.http
      .get<any>(url + city + "&appid=" + this.openWeatherMapAPIKey + "&units=metric")
      .pipe(
        map((data: any) => this.adapter.adapt(data))
      )
  }

  getFiveDayWeatherByCity(city: string): Observable<Weather[]> {
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=";
    return this.http
      .get<any>(url + city + "&appid=" + this.openWeatherMapAPIKey + "&units=metric&cnt=40")
      .pipe(
        map((data: any[]) => data['list'].map((item:any) => this.adapter.adapt(item))
        ),
      );
  }


}
