import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-trending',
  templateUrl: './movies-trending.component.html',
  styleUrls: ['./movies-trending.component.css']
})
export class MoviesTrendingComponent implements OnInit,OnDestroy {
  movies = [];  
  loadedPage: number = 1;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMoviesTrending(this.loadedPage);
  }

  getMoviesTrending(page: number) {
    this.moviesService.getMoviesTrending$(page)
      .subscribe(data => {
        this.movies.push(data);
        console.log(this.movies);
      },
      err => {
        console.error(err);
      })
  }

  ngOnDestroy() {}

  onScrollDown(): void {
    this.loadedPage += 1;
    this.getMoviesTrending(this.loadedPage);
  }

}
