import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm} from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { requestMessageComponent } from '../requestMessage/requestMessage.component';
import { FormsModule } from '@angular/forms';



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

  onSubmit(requestForm) {

    if(requestForm.fname === '' && requestForm.lname === '' && requestForm.phoneNum === '' && requestForm.email === '')
    {
      alert('Unable to process your request! Please fill the required fields!');
    }
    else if(requestForm.fname === '')
    {
      alert('Unable to process your request! Pls fill in your first name!');
    }
    else if(requestForm.lname === '')
    {
      alert('Unable to process your request! Pls fill in your Last name!');
    }
    else if(requestForm.phoneNum === '')
    {
      alert('Unable to process your request! Pls fill in your phone number!');
    }
    else if(requestForm.email === '')
    {
      alert('Unable to process your request! Pls fill in your email!');
    }
    else{
        this.dialog.open(
          requestMessageComponent,
          {
              data: { message: 'Incorrect Password!' }
          }
      );
    }
  }

}
