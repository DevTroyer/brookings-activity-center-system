// General imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

// Schedule-specific imports
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Component imports
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { RequestBannerComponent } from './components/request/request-banner/request-banner.component';
import { RequestComponent } from './components/request/request.component';
import { MenuBannerComponent } from './components/menu/menu-banner/menu-banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { KitchenInventoryComponent } from './components/inventory/kitchen/kitchen.component';
import { EquipmentInventoryComponent } from './components/inventory/equipment/equipment.component';
import {MessageComponent} from './components/message/message.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    RequestBannerComponent,
    RequestComponent,
    MenuBannerComponent,
    MenuComponent,
    ScheduleComponent,
    KitchenInventoryComponent,
    EquipmentInventoryComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CommonModule,
    NgbModalModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
    })
  ],
  exports: [ScheduleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
