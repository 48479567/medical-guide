import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})

export class SignupComponent implements OnInit {
  form: FormGroup = this.fb.group({
    firstname: this.fb.control('', [
      Validators.required]
    ),
    lastname: this.fb.control('', [
      Validators.required]
    ),
    username: this.fb.control('', [
      Validators.minLength(8),
      Validators.required]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirm: this.fb.control('', [
      Validators.required,
      Validators.minLength(8)
      ]),
  });

  passwordData = {
    icon: 'visibility_off',
    type: 'password',
    messageError: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.formOnChanges();
  }

  changePasswordData() {
    this.passwordData.icon = this.passwordData.icon === 'visibility_off' ? 'visibility' : 'visibility_off';
    this.passwordData.type = this.passwordData.type === 'text' ? 'password' : 'text';
  }

  register() {
    this.router.navigateByUrl('main');
  }

  formOnChanges(): void {
    this.confirm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(
      (valConfirm: string) => {
        if (this.password.value !== valConfirm) {
          const confirmValue = 'confirm';
          this.passwordData.messageError = 'Passwords are not the same!!';
          this.form.controls[confirmValue].setErrors({ incorrect : true });
        }
      }
    );
  }

  get confirm(): FormControl {
    return this.form.get('confirm') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }


}
