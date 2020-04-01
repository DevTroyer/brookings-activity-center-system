import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RequestBannerComponent } from './components/request/request-banner/request-banner.component';
import { RequestComponent } from './components/request/request.component';
import { MenuBannerComponent } from './components/menu/menu-banner/menu-banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { KitchenInventoryComponent } from './components/inventory/kitchen/kitchen.component';
import { EquipmentInventoryComponent } from './components/inventory/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestBannerComponent,
    RequestComponent,
    MenuBannerComponent,
    MenuComponent,
    ScheduleComponent,
    KitchenInventoryComponent,
    EquipmentInventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
