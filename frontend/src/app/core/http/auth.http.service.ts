import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISignInResponse, ISignInRequest, ISignUpRequest } from '../../shared/models/user.model';
import { API_URI } from './api-uri';
import { BROWSER_STORAGE } from '../api-local/browser-storage.service';
import { tap, catchError } from 'rxjs/operators';
import { LoggerService } from '../logger.service';
import { UserService } from '../services/user.service';
import { HandleErrorService } from '../handle-error.service';

@Injectable({ providedIn: 'root' })
export class AuthHttpService {
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private handleErrorService: HandleErrorService,
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private userService: UserService
  ) { }

  public signIn(bodyRequest: ISignInRequest): Observable<ISignInResponse> {
    return this.http.post<ISignInResponse>(`${API_URI}/user/signin`, bodyRequest).pipe(
      tap(
        (signInResponse: ISignInResponse) => {
          if (signInResponse.role === 'admin') {
            this.logger.log(`Welcome ${signInResponse.name}`, 'bg-success');
            this.storage.setItem('token', JSON.stringify(signInResponse));
          } else {
            this.logger.log('Necesitas ser administrador para ingresar', 'bg-danger');
          }
        }
      ),
      catchError(this.handleErrorService.handleError('Sing In', null, this.logger))
    );
  }

  public signUp(bodyRequest: ISignUpRequest): Observable<ISignInResponse> {
    return this.http.post<ISignInResponse>(`${API_URI}/user/signup`, bodyRequest).pipe(
      tap(
        (signUpResponse: ISignInResponse) => {
          this.logger.log(`User added with id ${signUpResponse._id}`, 'bg-success');
          this.userService.addUser(signUpResponse);
        }
      ),
      catchError(this.handleErrorService.handleError('Sing In', bodyRequest, this.logger))
    );
  }

}
