import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfactualsMetricsInstanceComponent } from './counterfactuals-metrics-instance.component';

describe('CounterfactualsMetricsInstanceComponent', () => {
  let component: CounterfactualsMetricsInstanceComponent;
  let fixture: ComponentFixture<CounterfactualsMetricsInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterfactualsMetricsInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterfactualsMetricsInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
