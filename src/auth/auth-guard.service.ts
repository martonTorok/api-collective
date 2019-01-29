import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthLocalService } from './auth-local.service';


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthLocalService, private router: Router) { }

    canActivate(): boolean {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        return true;

    }

}