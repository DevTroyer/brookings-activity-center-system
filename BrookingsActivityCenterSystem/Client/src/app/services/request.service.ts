import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RequestModel } from '../models/requestModel';

@Injectable({
    providedIn: 'root'
})

export class RequestService {
    constructor(private http: HttpClient) {}

    request(firstName: string, lastName: string, phoneNumber: string) {
        return this.http.post<RequestModel>(`api/request`, { FirstName: firstName, LastName: lastName, PhoneNuber: phoneNumber })
        .pipe(user => {
            if (user !== null) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }
}
