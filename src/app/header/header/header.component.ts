import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowsService } from 'src/app/pages/shows/shows.service';
import { AuthLocalService } from 'src/auth/auth-local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  selectedShowId: number;
  showUtilityMenu: boolean = false;
  showEntertainmentMenu: boolean = false;

  constructor(private authService: AuthLocalService, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'search': new FormControl(null, Validators.required)
    })
    this.getSelectedShowId();
  }

  getSelectedShowId(): void {
    this.showsService.getSelectedId()
      .subscribe(id => {
        this.selectedShowId = id;
      },
      err => {
        console.log(err);
      })
  }

  onUtilityDropdown(): void {
    if (!this.showUtilityMenu) {
      this.showEntertainmentMenu = false;
      this.showUtilityMenu = true;
    } else {
      this.showUtilityMenu = false;
    }
  }
  closeDropdowns(): void {
    this.showEntertainmentMenu = false;
    this.showUtilityMenu = false;
  }

  onUtilityItem(): void {
    if (!this.showUtilityMenu) {
      this.showUtilityMenu = true;
    } else {
      this.showUtilityMenu = false;
    }
  }
  onEntertainmentDropdown(): void {
    if (!this.showEntertainmentMenu) {
      this.showUtilityMenu = false;
      this.showEntertainmentMenu = true;
    } else {
      this.showEntertainmentMenu = false;
    }
  }

  onEntertainmentItem(): void {
    if (!this.showEntertainmentMenu) {
      this.showEntertainmentMenu = true;
    } else {
      this.showEntertainmentMenu = false;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }


}
