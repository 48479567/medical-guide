import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as vl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../../core/http/auth.http.service';
import { ISignInRequest, ISignInResponse } from '../../../shared/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})

export class SigninComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    username: this.fb.control('', [vl.minLength(8), vl.required]),
    password: this.fb.control('', [vl.required, vl.minLength(8)])
  });

  public passwordData = {
    icon: 'visibility_off',
    type: 'password'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authHttp: AuthHttpService
  ) {
  }

  ngOnInit(): void {
  }

  public getControlSelector(selector: string): FormControl {
    return this.form.get(selector) as FormControl;
  }

  public changePasswordData(): void {
    this.passwordData.icon = this.passwordData.icon === 'visibility_off' ? 'visibility' : 'visibility_off';
    this.passwordData.type = this.passwordData.type === 'text' ? 'password' : 'text';
  }

  public signIn(): void {
    const signInValue = this.form.value as ISignInRequest;
    console.log(signInValue);
    this.authHttp.signIn(signInValue).subscribe(
      (signInResponse: ISignInResponse) => this.router.navigateByUrl('main')
    );
  }
}
