import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowsService } from './shows.service';
import { Route, ActivatedRoute, Router, Event } from '@angular/router';
import { Show } from 'src/app/models/show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit, OnDestroy {
  shows: Show[];
  totalPage: number = 500;
  collectionSize: number = 10000;
  currentPage: number;
  showSpinner: boolean = true;
  showNotFound: boolean = false;

  constructor(private showsService: ShowsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentPage = localStorage.getItem('currentPage') ? +localStorage.getItem('currentPage') : 1;
    this.getPopularTVShows(this.currentPage);
  }

  ngOnDestroy() {}

  getPopularTVShows(page: number): void {
    this.showsService.getPopularTVShowsByPage$(page)
      .subscribe(data => {
        this.shows = data;
        this.showSpinner = false;
      },
        err => {
          console.error(err);
          this.showNotFound = true;
        });
  }

  loadPage(page: number): void {
    this.currentPage = page;
    localStorage.setItem('currentPage', this.currentPage.toString());
    this.getPopularTVShows(this.currentPage);

  }

  onSelect(event: Event): void {
    localStorage.setItem('selectedId', event['target']['pathname'].split('/')[2])
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
