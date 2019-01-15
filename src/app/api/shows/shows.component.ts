import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowsService } from './shows.service';
import { Route, ActivatedRoute, Router, Event } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  shows: Object;
  totalPage: number;
  collectionSize: number;
  currentPage: number;
  showSpinner: boolean = true;
  showNotFound: boolean = false;

  constructor(private showsService: ShowsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.currentPage = localStorage.getItem('currentPage') ? +localStorage.getItem('currentPage') : 1;
    this.getPopularTVShows(this.currentPage);
  }


  getPopularTVShows(page: number): void {
    this.showsService.getTopRatedTVShowsByPage(page)
      .subscribe(data => {
        this.shows = data;
        this.totalPage = data['total_pages']
        this.collectionSize = data['total_results']
        console.log(data);
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
    console.log(event)
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
