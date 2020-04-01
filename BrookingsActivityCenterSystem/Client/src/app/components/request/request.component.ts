import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(
    private requestService: RequestService,
    private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      FirstName: ['Akhil'],
      LastName: ['Jain'],
      PhoneNumber: ['']
    });
  }

  get f() {
    return this.requestForm.controls;
  }

  onSubmit(form) {
    this.requestService.request(this.f.FirstName.value, this.f.LastName.value, this.f.PhoneNumber.value)
    .pipe(first());

    console.log(this.f.FirstName.value, this.f.LastName.value, this.f.PhoneNumber.value)
    //form.reset();
  }

}
