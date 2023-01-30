import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  form: FormGroup | any;
  signupForm: FormGroup| any;
  submitted = false;
  submittedCreate = false;
  create: boolean = false;
  isActive = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      retypeEmail:  ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  get f() { return this.form.controls; }
  get g() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("buhgug");

    if (this.form.invalid) {
      return;
    }
  }

  signUp() {
    this.submittedCreate = true;
    if (this.signupForm.invalid) {
      return;
    }
  }

  createAcc() {
    this.create = true;
  }
}
