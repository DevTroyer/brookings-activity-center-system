import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<User>(`api/authenticate`, { username: username, password: password })
        .pipe(map(user => {
            console.log(user);
            if (user !== null) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
