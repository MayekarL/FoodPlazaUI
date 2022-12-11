import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountforuserComponent } from './discountforuser.component';

describe('DiscountforuserComponent', () => {
  let component: DiscountforuserComponent;
  let fixture: ComponentFixture<DiscountforuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountforuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
