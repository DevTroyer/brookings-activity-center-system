import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
    this.authService.kitchenManager = false;
    this.authService.equipmentManager = false;
    this.authService.staff = false;
    this.authService.admin = false;
  }

  validateKitchen() {
    if (this.authService.kitchenManager) {
      return true;
    }
  }

  validateEquipment() {
    if (this.authService.equipmentManager) {
      return true;
    }
  }

  validateSchedule() {
    if (this.authService.kitchenManager || this.authService.equipmentManager || this.authService.staff || this.authService.admin) {
      return true;
    }
  }

  validateLogin() {
    if (this.authService.kitchenManager || this.authService.equipmentManager || this.authService.staff || this.authService.admin) {
      return true;
    }
  }

  validateAdmin() {
    if (this.authService.admin) {
      return true;
    }
  }

}
