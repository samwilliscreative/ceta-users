import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user-model.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users = new BehaviorSubject<User[]>([] as User[]);
  readonly users$ = this._users.asObservable();

  constructor(private httpClient: HttpClient) {}

  addUser(user: User): Observable<boolean> {
    const userNoRef: User = user;
    const currentUsers = this._users.getValue();
    userNoRef.id = Math.floor(Math.random() * 1000) + 1;
    currentUsers.push(userNoRef);

    this._users.next(currentUsers);
    return of(true);
  }

  getUser(userId: number): Observable<User> {
    return this.users$.pipe(
      map((users) => {
        return users.find((user) => user.id === userId);
      })
    );
  }

  getUsersFromApi(): void {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      )
      .subscribe((users) => {
        this._users.next(users);
      });
  }

  updateUser(user: User): Observable<boolean> {
    const userNoRef: User = user;
    const users: User[] = this._users.getValue();
    const userIndex: number = users.findIndex(
      (user) => user.id === userNoRef.id
    );
    users[userIndex] = userNoRef;

    this._users.next(users);
    return of(true);
  }
}
