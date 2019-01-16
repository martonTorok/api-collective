import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private openWeatherMapAPIKey = 'ce9dd870434db03941c9ddfa662d31b2';

  constructor(private http: HttpClient) { }

  getCurrentWeatherByCity$(city: string): Observable<object> {
    return this.http
      .get<any>("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.openWeatherMapAPIKey + "&units=metric")
  }

  getFiveDayWeatherBycity(city: string): Observable<object> {
    return this.http
      .get<any>("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+this.openWeatherMapAPIKey + "&units=metric&cnt=40")
  }


}
