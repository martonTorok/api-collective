import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  apod: Object;
  showSpinner: boolean = true;
  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getApod()
      .subscribe(data => {
        this.apod = data;
        this.showSpinner = false;
      },
        err => {
          console.error(err);
        });
  }

}
