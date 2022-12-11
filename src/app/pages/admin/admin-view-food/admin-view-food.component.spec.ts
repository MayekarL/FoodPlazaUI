import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFoodComponent } from './admin-view-food.component';

describe('AdminViewFoodComponent', () => {
  let component: AdminViewFoodComponent;
  let fixture: ComponentFixture<AdminViewFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
