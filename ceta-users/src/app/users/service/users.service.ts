import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from './user-model.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users = new BehaviorSubject<User[]>([] as User[]);
  readonly users$ = this._users.asObservable();

  constructor(private httpClient: HttpClient) { }

  getUsers(): void {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      catchError(err => {
        return throwError(err);
      })
    ).subscribe(users => {
      this._users.next(users)
    }
    )
  }
}
