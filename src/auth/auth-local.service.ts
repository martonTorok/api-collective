import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthLocalService {


    constructor(private http: HttpClient) {

    }

    public get isLoggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null)
    }

    login(email: string, password: string): Observable<boolean> {
        return this.http.post<{ token: string }>('http://localhost:3000/users/login', { email, password })
            .pipe(
                map(result => {
                    localStorage.setItem('access_token', result.token);
                    return true;
                })
            );
    }

    logout() {
        localStorage.removeItem('access_token');
    }
}


