import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: IUser[] = [];

  constructor() { }

  public getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  public addUser(newUser: IUser): void {
    this.users.push(newUser);
  }

  public setUsers(usersResponse: IUser[]): void {
    this.users = usersResponse;
  }

}
