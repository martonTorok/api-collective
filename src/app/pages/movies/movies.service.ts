import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  newsAPIKey = '8d939faee9a74f779cebe00c3ed5226d';
  dbAPIKey = '4225576a50d817510451d6fddff2fa2f';

  constructor(private http: HttpClient) { }

  private _getStartingDate(): string {
    let date = new Date();
    date.setDate(date.getDate() -3);
    let startingDate = date.toISOString().slice(0,10);
    return startingDate;
  }

  getMoviesNewsLastThreeDays$(page: number): Observable<Object> {
    return this.http
      .get('https://newsapi.org/v2/everything?q=(film AND cinema)&language=en&from='+this._getStartingDate()+'&sortby=popularity&page='+page+'&apiKey='+this.newsAPIKey)
  }

  getMoviesOnAir$(): Observable<Object> {
    return this.http
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key='+this.dbAPIKey+'&language=en-US&page=1&region=HU')
  }

  getMoviesTrending$(page: number): Observable<object> {
    return this.http
      .get('https://api.themoviedb.org/3/movie/popular?api_key='+this.dbAPIKey+'&language=en-US&page='+page)
  }

}
