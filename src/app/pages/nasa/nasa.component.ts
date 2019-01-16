import { Component, OnInit, OnDestroy } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit, OnDestroy {
  apod: Object;
  showSpinner: boolean = true;
  showLoadingSpinner: boolean = true;
  loading: boolean = true
  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.getApod()
  }

  ngOnDestroy() { }

  getApod() {
    this.nasaService.getApod$()
      .subscribe(data => {
        this.apod = data;
        this.showSpinner = false;
      },
        err => {
          console.error(err);
        });
  }

  onLoad(): void {
    this.loading = false;
    this.showLoadingSpinner = false;
  }

}
