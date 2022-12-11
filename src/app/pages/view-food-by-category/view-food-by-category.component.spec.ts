import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodByCategoryComponent } from './view-food-by-category.component';

describe('ViewFoodByCategoryComponent', () => {
  let component: ViewFoodByCategoryComponent;
  let fixture: ComponentFixture<ViewFoodByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFoodByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
