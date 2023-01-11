import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationOverviewComponent } from './explanation-overview.component';

describe('ExplanationOverviewComponent', () => {
  let component: ExplanationOverviewComponent;
  let fixture: ComponentFixture<ExplanationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
