import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(form: NgForm) {
    this.authService
    .login(this.f.email.value, this.f.password.value)
    .pipe(first());
    form.reset();
  }
}
