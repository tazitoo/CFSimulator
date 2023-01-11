import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationMetricsListComponent } from './explanation-metrics-list.component';

describe('ExplanationMetricsListComponent', () => {
  let component: ExplanationMetricsListComponent;
  let fixture: ComponentFixture<ExplanationMetricsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationMetricsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationMetricsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
