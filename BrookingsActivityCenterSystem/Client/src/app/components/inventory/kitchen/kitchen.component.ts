import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fItem } from '../Food';
import { foodItems } from '../mock-equipment-items';

@Component({
  selector: 'app-kitchen-inventory',  
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenInventoryComponent implements OnInit {
  itemForm:FormGroup;
  isShow = true;
  headers = ["ID", "Ingredient", "Quantity", "Location"]
  FoodItems = foodItems;
  newItem: fItem = {ID: 0, Ingredient: "", Quantity: 0, Location: ""};
  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      IngredientName: [''],
      quantityNum: [''],
      locationName: ['']
    });
  }

  onSubmit() {
    this.newItem.Ingredient = this.itemForm.get('IngredientName').value;
    this.newItem.Quantity = this.itemForm.get('quantityNum').value;
    this.newItem.Location = this.itemForm.get('locationName').value;
    this.newItem.ID = this.FoodItems.length + 1;
    this.FoodItems.push(this.newItem);
    this.isShow = true;
  }

  toggle() {
    this.isShow = !this.isShow;
  }

}
