import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-news',
  templateUrl: './movies-news.component.html',
  styleUrls: ['./movies-news.component.css']
})
export class MoviesNewsComponent implements OnInit, OnDestroy {
  news = [];
  showLoadingSpinner: boolean = true;
  loadedPage: number = 1;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMoviesNewsLastThreeDays(this.loadedPage);
  }

  ngOnDestroy() { }

 
  getMoviesNewsLastThreeDays(page: number): void {
    this.moviesService.getMoviesNewsLastThreeDays$(page)
      .subscribe(data => {
        this.news.push(data);
        this.showLoadingSpinner = false;
      },
      err => {
        console.error(err);
      });
  }

  onScrollDown(): void {
    this.loadedPage += 1;
    this.getMoviesNewsLastThreeDays(this.loadedPage);
  }
}
