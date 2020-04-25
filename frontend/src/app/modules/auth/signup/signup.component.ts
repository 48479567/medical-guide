import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators as vl, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IDataSchemaOption } from '../../../shared/models';
import { ISignUpRequest } from '../../../shared/models/user.model';
import { AuthHttpService } from 'src/app/core/http/auth.http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})

export class SignupComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    firstname: this.fb.control('', [
      vl.required]
    ),
    lastname: this.fb.control('', [
      vl.required]
    ),
    username: this.fb.control('', [
      vl.minLength(8),
      vl.required]),
    role: this.fb.control('', [
      vl.required
    ]),
    password: this.fb.control('', [
      vl.required,
      vl.minLength(8)
    ]),
    confirm: this.fb.control('', [
      vl.required,
      vl.minLength(8)
      ])
  });

  public roleData: IDataSchemaOption[] = [
    { _id: 'user',
      imageSrc: 'https://i.imgur.com/3KOFkVj.png',
      anchorValue: 'User' },
    { _id: 'admin',
      imageSrc: 'https://i.imgur.com/hGaGfkI.png',
      anchorValue: 'Admin' },
  ];

  public passwordData = {
    icon: 'visibility_off',
    type: 'password',
    messageError: 'Invalid Password!!'
  };

  public confirmMessageError = 'Invalid Password';

  get confirm(): FormControl {
    return this.form.get('confirm') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authHttp: AuthHttpService
  ) {
  }

  ngOnInit(): void {
    this.formOnChanges();
  }

  public changePasswordData(): void {
    this.passwordData.icon = this.passwordData.icon === 'visibility_off' ? 'visibility' : 'visibility_off';
    this.passwordData.type = this.passwordData.type === 'text' ? 'password' : 'text';
  }

  public formOnChanges(): void {
    this.confirm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(
      (valConfirm: string) => {
        if (this.password.value !== valConfirm) {
          const confirmValue = 'confirm';
          this.confirmMessageError = 'Passwords must be the same!!';
          this.form.controls[confirmValue].setErrors({ incorrect : true });
        }
      }
    );
  }

  public signUp(): void {
    const formValue = this.form.value;

    const signUpRequest = {
      name: `${formValue.firstname} ${formValue.lastname}`,
      password: formValue.password,
      role: formValue.role,
      username: formValue.username
    } as ISignUpRequest;

    this.authHttp.signUp(signUpRequest).subscribe();
  }

}
