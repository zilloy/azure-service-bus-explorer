import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBusServiceComponent } from './service-bus-service.component';

describe('ServiceBusServiceComponent', () => {
  let component: ServiceBusServiceComponent;
  let fixture: ComponentFixture<ServiceBusServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBusServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
