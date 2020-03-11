import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenInventoryComponent } from './kitchen.component';

describe('kitchen.Component', () => {
  let component: KitchenInventoryComponent;
  let fixture: ComponentFixture<KitchenInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});