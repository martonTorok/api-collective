import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-trending',
  templateUrl: './movies-trending.component.html',
  styleUrls: ['./movies-trending.component.css']
})
export class MoviesTrendingComponent implements OnInit,OnDestroy {
  movies = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMoviesTrending(1);
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

}
