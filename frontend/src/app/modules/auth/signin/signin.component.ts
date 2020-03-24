import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})

export class SigninComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.minLength(8), Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(8)])
  });

  passwordData = {
    icon: 'visibility_off',
    type: 'password'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  getControlSelector(selector: string): FormControl {
    return this.form.get(selector) as FormControl;
  }

  changePasswordData() {
    this.passwordData.icon = this.passwordData.icon === 'visibility_off' ? 'visibility' : 'visibility_off';
    this.passwordData.type = this.passwordData.type === 'text' ? 'password' : 'text';
  }

  login() {
    this.router.navigateByUrl('main');
  }


}
