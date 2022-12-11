import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbillsComponent } from './viewallbills.component';

describe('ViewallbillsComponent', () => {
  let component: ViewallbillsComponent;
  let fixture: ComponentFixture<ViewallbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallbillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
