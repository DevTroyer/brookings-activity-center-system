import { NgModule } from '@angular/core';

import { MatNativeDateModule, MatIconModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule } from '@angular/material';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule,
        MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,
        SatDatepickerModule, SatNativeDateModule],
    exports: [MatNativeDateModule, FormsModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule,
        MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,
        SatDatepickerModule, SatNativeDateModule]
    })

export class MaterialModule { }
