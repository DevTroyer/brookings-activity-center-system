import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserAuthModel } from '../models/userAuthModel';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(emailArg: string, passwordArg: string) {
        return this.http.post<UserAuthModel>(`api/authenticate`, { email: emailArg, password: passwordArg })
        .pipe(user => {
            if (user !== null) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
