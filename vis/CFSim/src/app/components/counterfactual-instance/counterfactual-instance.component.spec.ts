import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfactualInstanceComponent } from './counterfactual-instance.component';

describe('CounterfactualInstanceComponent', () => {
  let component: CounterfactualInstanceComponent;
  let fixture: ComponentFixture<CounterfactualInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterfactualInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterfactualInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
