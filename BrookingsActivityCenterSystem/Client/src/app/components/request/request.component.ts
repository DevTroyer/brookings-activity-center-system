import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { requestMessageComponent } from '../requestMessage/requestMessage.component';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(
    private requestService: RequestService,
    private formBuilder: FormBuilder, private dialog: MatDialog) { 
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
    this.dialog.open(
      requestMessageComponent,
      {
          data: { message: 'Incorrect Password!' }
      }
  );
    //form.reset();
  }

}
