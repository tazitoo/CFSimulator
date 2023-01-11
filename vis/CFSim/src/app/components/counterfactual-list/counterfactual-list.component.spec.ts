import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterfactualListComponent } from './counterfactual-list.component';

describe('CounterfactualListComponent', () => {
  let component: CounterfactualListComponent;
  let fixture: ComponentFixture<CounterfactualListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterfactualListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterfactualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
