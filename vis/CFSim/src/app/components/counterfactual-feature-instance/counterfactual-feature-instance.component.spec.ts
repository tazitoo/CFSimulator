import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfactualFeatureInstanceComponent } from './counterfactual-feature-instance.component';

describe('CounterfactualFeatureInstanceComponent', () => {
  let component: CounterfactualFeatureInstanceComponent;
  let fixture: ComponentFixture<CounterfactualFeatureInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterfactualFeatureInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterfactualFeatureInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
