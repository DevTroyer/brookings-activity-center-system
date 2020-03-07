import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
