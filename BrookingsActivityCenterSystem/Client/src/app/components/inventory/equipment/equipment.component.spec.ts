import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInventoryComponent } from './equipment.component';

describe('kitchen.Component', () => {
  let component: EquipmentInventoryComponent;
  let fixture: ComponentFixture<EquipmentInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});