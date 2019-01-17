import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Show, ShowAdapter } from 'src/app/models/show';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  dbAPIKey = '4225576a50d817510451d6fddff2fa2f';

  constructor(private http: HttpClient,
              private adapter: ShowAdapter) { }

  getPopularTVShowsByPage$(page: number): Observable<Show[]> {
    const url = 'https://api.themoviedb.org/3/tv/popular?api_key='
    return this.http
      .get(url+this.dbAPIKey+'&language=en-US&page='+page)
      .pipe(
        map((data:any[]) => data['results'].map((item:any) => this.adapter.adapt(item))
        ),
      );
  }

  getShowById$(id: number): Observable<Show> {
    const url = 'https://api.themoviedb.org/3/tv/';
    return this.http
      .get(url+id+'?api_key='+this.dbAPIKey+'&language=en-US')
      .pipe(
        map((data:any) => this.adapter.adapt(data))
      )
  }

  getSimilarShowsById$(id: number): Observable<Show[]> {
    const url = 'https://api.themoviedb.org/3/tv/'
    return this.http
      .get(url+id+'/similar?api_key='+this.dbAPIKey+'&language=en-US&page=1')
      .pipe(
        map((data:any[]) => data['results'].map((item:any) => this.adapter.adapt(item)))
      )
  }

  getSelectedId(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(localStorage.getItem('selectedId') ? +localStorage.getItem('selectedId') : 44217)
    })
  }
}
