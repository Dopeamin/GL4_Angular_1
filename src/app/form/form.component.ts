import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  email: string = '';
  password: string = '';
  authForm: FormGroup;
  constructor() {
    this.authForm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.password, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {}

  get emailData() {
    return this.authForm.get('email');
  }

  get passwordData() {
    return this.authForm.get('password');
  }

  validate() {
    if (this.authForm.valid) this.authForm.reset();
  }
}
