import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfactualDetailsComponent } from './counterfactual-details.component';

describe('CounterfactualDetailsComponent', () => {
  let component: CounterfactualDetailsComponent;
  let fixture: ComponentFixture<CounterfactualDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterfactualDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterfactualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
