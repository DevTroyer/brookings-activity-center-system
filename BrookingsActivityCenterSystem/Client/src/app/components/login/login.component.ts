import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  isValidEmail(field: string) {
    return (
      this.loginForm.get(field).value === 'kitchen' ||
      this.loginForm.get(field).value === 'equipment' ||
      this.loginForm.get(field).value === 'staff' ||
      this.loginForm.get(field).value === 'admin'
    );
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
    this.loginForm.reset();
  }
}




// loginForm: FormGroup;

//   constructor(
//     private authService: AuthService,
//     private formBuilder: FormBuilder
//     ) {
//   }

//   // Life cycle hook called by Angular to indicate that Angular is done constructing the component
//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', [Validators.required, 
//       Validators.minLength(6)]]
//     });
//   }

//   get f() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     this.authService
//     .login(this.f.email.value, this.f.password.value)
//     .pipe(first());

//     console.log(this.f.email.value, this.f.password.value);
//     //form.reset();
//   }
