import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/shared/models/user.model';
import { API_URI } from './api-uri';
import { LoggerService } from '../logger.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HandleErrorService } from '../handle-error.service';

@Injectable({ providedIn: 'root' })
export class UserHttpService {
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private userService: UserService,
    private he: HandleErrorService
  ) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${API_URI}/user`).pipe(
      tap(
        (usersResponse: IUser[]) => {
          this.userService.setUsers(usersResponse);
          this.logger.log(`Get ${usersResponse.length} Users `, 'bg-primary');
        }
      ),
      catchError(this.he.handleError('Get User', [ ], this.logger))
    );
  }
}
