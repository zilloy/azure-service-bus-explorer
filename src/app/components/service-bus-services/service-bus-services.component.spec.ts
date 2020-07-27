import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBusServicesComponent } from './service-bus-services.component';

describe('ServiceBusServicesComponent', () => {
  let component: ServiceBusServicesComponent;
  let fixture: ComponentFixture<ServiceBusServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBusServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBusServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
