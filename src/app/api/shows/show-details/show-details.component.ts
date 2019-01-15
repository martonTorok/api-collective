import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showDetails: Object;
  similarShows: Object;
  id: number;
  showSpinner: boolean = true;
  showNotFound: boolean = false;
  selected: number;

  constructor(private showsService: ShowsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
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

  getShowById(id: number) {
    this.showsService.getShowById(id)
      .subscribe(data => {
        this.showDetails = data;
        this.showSpinner = false;
        this.showNotFound = false;
        console.log(data);
      },
        err => {
          this.showNotFound = true;
          console.error(err);
        })
  }

  getSimilarShowsById(id: number) {
    this.showsService.getSimilarShowsById(id)
      .subscribe(data => {
        this.similarShows = data;
        this.showSpinner = false;
      },
        err => {
          console.error(err);
        })
  }

}
