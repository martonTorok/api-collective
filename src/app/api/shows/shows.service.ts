import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  dbAPIKey = '4225576a50d817510451d6fddff2fa2f';

  constructor(private http: HttpClient) { }

  getTopRatedTVShowsByPage(page: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key='+this.dbAPIKey+'&language=en-US&page='+page);
  }

  getShowById(id: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+id+'?api_key='+this.dbAPIKey+'&language=en-US')
  }

  getSimilarShowsById(id: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/'+id+'/similar?api_key='+this.dbAPIKey+'&language=en-US&page=1')
  }

  getSelectedId(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(localStorage.getItem('selectedId') ? +localStorage.getItem('selectedId') : 100)
    })
  }
}
