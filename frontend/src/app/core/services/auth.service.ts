import { Injectable, Inject } from '@angular/core';
import { BROWSER_STORAGE } from '../api-local/browser-storage.service';
import { ISignInResponse } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    @Inject(BROWSER_STORAGE) public storage: Storage
  ) { }

  public isSignIn(): ISignInResponse {
    return JSON.parse(this.storage.getItem('token')) as ISignInResponse;
  }

  public isAdmin(): boolean {
    if (this.isSignIn()) {
      return this.isSignIn().role === 'admin' ? true : false;
    }
    return false;
  }

  public signOut(): void {
    this.storage.removeItem('token');
  }
}
