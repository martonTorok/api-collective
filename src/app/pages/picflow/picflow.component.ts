import { Component, OnInit, OnDestroy } from '@angular/core';
import { PicflowService } from './picflow.service';

@Component({
  selector: 'app-picflow',
  templateUrl: './picflow.component.html',
  styleUrls: ['./picflow.component.css']
})
export class PicflowComponent implements OnInit, OnDestroy {
  pictureData: Object;
  showLoadingSpinner: boolean = true;

  constructor(private picflowService: PicflowService) { }

  ngOnInit(): void {
    this.getCuratedPhotos();
  }

  ngOnDestroy() {}

  onLoad(index: number):void  {
    console.log(index)
    this.pictureData['photos'][index].loading = false;
    this.pictureData['photos'][index].show = true;
  }

  isLoaded(index: number): boolean {
    return this.pictureData['photos'][index].loading;
  }

  getCuratedPhotos(): void {
    this.picflowService.getCuratedPhotos$()
      .subscribe(data => {
        this.pictureData = data;
        for (let i = 0; i < this.pictureData['photos'].length; i++) {
          this.pictureData['photos'][i].show = false;
          this.pictureData['photos'][i].loading = true;
          /* console.log(this.pictureData['photos'][i]) */
        }
        this.showLoadingSpinner = false;
        console.log(data)
      },
        err => {
          console.log(err)
        })
  }

}
