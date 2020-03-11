import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestComponent } from './components/request/request.component';
import { MenuComponent } from './components/menu/menu.component';
import { EquipmentInventoryComponent } from './components/inventory/equipment/equipment.component';
import { KitchenInventoryComponent } from './components/inventory/kitchen/kitchen.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: RequestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'request', component: RequestComponent },
  { path: 'equipment-inventory', component: EquipmentInventoryComponent },
  { path: 'kitchen-inventory', component: KitchenInventoryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
