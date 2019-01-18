import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowsService } from '../shows.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  showDetails: Object;
  similarShows: Object;
  id: number;
  showSpinner: boolean = true;
  showNotFound: boolean = false;
  selected: number;

  constructor(private showsService: ShowsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.getShowById(this.id);
        this.getSimilarShowsById(this.id);
      },
        err => {
          console.error(err);
        }
      );
    this.selected = +localStorage.getItem('selectedId');
  }

  ngOnDestroy() { }

  getShowById(id: number): void {
    this.showsService.getShowById$(id)
      .subscribe(data => {
        this.showDetails = data;
        this.showSpinner = false;
        this.showNotFound = false;
      },
        err => {
          this.showNotFound = true;
          console.error(err);
        })
  }

  getSimilarShowsById(id: number): void {
    this.showsService.getSimilarShowsById$(id)
      .subscribe(data => {
        this.similarShows = data;
        this.showSpinner = false;
      },
        err => {
          console.error(err);
        })
  }

  onSelectSimilar() {
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
