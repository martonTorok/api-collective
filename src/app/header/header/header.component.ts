import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'src/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShowsService } from 'src/app/api/shows/shows.service';

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

  constructor(private authService: AuthService, private showsService: ShowsService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'search': new FormControl(null, Validators.required)
    })
    this.getSelectedShowId();
  }

  getSelectedShowId() {
    this.showsService.getSelectedId()
      .subscribe(id => {
        this.selectedShowId = id;
      },
      err => {
        console.log(err);
      })
  }

  onUtilityDropdown() {
    if (!this.showUtilityMenu) {
      this.showEntertainmentMenu = false;
      this.showUtilityMenu = true;
    } else {
      this.showUtilityMenu = false;
    }
  }
  closeDropdowns() {
    this.showEntertainmentMenu = false;
    this.showUtilityMenu = false;
  }

  onUtilityItem() {
    if (!this.showUtilityMenu) {
      this.showUtilityMenu = true;
    } else {
      this.showUtilityMenu = false;
    }
  }
  onEntertainmentDropdown() {
    if (!this.showEntertainmentMenu) {
      this.showUtilityMenu = false;
      this.showEntertainmentMenu = true;
    } else {
      this.showEntertainmentMenu = false;
    }
  }

  onEntertainmentItem() {
    if (!this.showEntertainmentMenu) {
      this.showEntertainmentMenu = true;
    } else {
      this.showEntertainmentMenu = false;
    }
  }
  onLogin() {
    this.authService.signInWithGoogle();
  }

  onLogout() {
    this.authService.logout();
  }


}
