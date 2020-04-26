import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    templateUrl:  'requestMessage.component.html'
})

export  class  requestMessageComponent {
    constructor(private  dialogRef: MatDialogRef<requestMessageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    public  closeMe() {
        this.dialogRef.close();
    }
}
