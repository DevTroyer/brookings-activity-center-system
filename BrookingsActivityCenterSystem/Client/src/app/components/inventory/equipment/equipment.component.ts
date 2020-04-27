import { Component, OnInit } from '@angular/core';
import {eItem} from '../Equipment';
import {equipItems} from '../mock-equipment-items'
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { fItem } from '../Food';

@Component({
  selector: 'app-equipment-inventory',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.sass']
})
export class EquipmentInventoryComponent implements OnInit {
  itemForm:FormGroup;
  isShow = true;
  headers = ["ID", "Equipment", "Quantity", "Location"]
  equipmentItems = equipItems;
  newItem: eItem = {ID: 0, Equipment: "", Quantity: 0, Location: ""};
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      equipmentName: [''],
      quantityNum: [''],
      locationName: ['']
    });
  }

  onSubmit() {
    this.newItem.Equipment = this.itemForm.get('equipmentName').value;
    this.newItem.Quantity = this.itemForm.get('quantityNum').value;
    this.newItem.Location = this.itemForm.get('locationName').value;
    this.newItem.ID = this.equipmentItems.length + 1;
    this.equipmentItems.push(this.newItem);
    this.isShow = true;
  }

  toggle() {
    this.isShow = !this.isShow;
  }

}
