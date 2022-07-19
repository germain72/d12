import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersapiComponent } from './customersapi.component';

describe('CustomersapiComponent', () => {
  let component: CustomersapiComponent;
  let fixture: ComponentFixture<CustomersapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
