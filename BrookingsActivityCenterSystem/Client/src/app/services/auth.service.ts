import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public kitchenManager: boolean = false;
    public equipmentManager: boolean = false;
    public staff: boolean = false;
    public admin: boolean = false;

    get isLoggedIn() {
        return this.isLoggedIn.asObservable();
    }

    constructor(private router: Router) {}

    login(user: User) {
        if (user.email === 'kitchen' && user.password === 'kitchen') {
            this.loggedIn.next(true);
            this.kitchenManager = true;
            this.router.navigate(['kitchen-inventory']);
        } else if (user.email === 'equipment' && user.password === 'equipment') {
            this.loggedIn.next(true);
            this.equipmentManager = true;
            this.router.navigate(['equipment-inventory']);
        } else if (user.email === 'staff' && user.password === 'staff') {
            this.loggedIn.next(true);
            this.staff = true;
            this.router.navigate(['schedule']);
        } else if (user.email === 'admin' && user.password === 'admin') {
            this.loggedIn.next(true);
            this.admin = true;
            this.router.navigate(['menu']);
        }
    }

    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['login']);
    }
}

// --> put in constructor parameters --> private http: HttpClient

// login(emailArg: string, passwordArg: string) {
//     return this.http.post<UserAuthModel>(`api/authenticate`, { email: emailArg, password: passwordArg })
//     .pipe(user => {
//         if (user !== null) {
//             localStorage.setItem('currentUser', JSON.stringify(user));
//         }
//         return user;
//     });
// }

// logout() {
//     localStorage.removeItem('currentUser');
// }
