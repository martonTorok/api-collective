import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-onair',
  templateUrl: './movies-onair.component.html',
  styleUrls: ['./movies-onair.component.css']
})
export class MoviesOnairComponent implements OnInit,OnDestroy {
  movies: Object;
  showLoadingSpinner: boolean = true;
  imageLoadCount: number = 0;

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.getMoviesOnAir();
  }

  ngOnDestroy() {}
  
  getMoviesOnAir() {
    this.moviesService.getMoviesOnAir$()
      .subscribe(data => {
        this.movies = data;
      }, err => {
        console.error(err);
      })
  }

  onLoad() {
    this.imageLoadCount +=1;
    if(this.imageLoadCount === 12) {
      this.showLoadingSpinner = false;
    }
  }

}
