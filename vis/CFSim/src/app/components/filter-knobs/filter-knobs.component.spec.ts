import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterKnobsComponent } from './filter-knobs.component';

describe('FilterKnobsComponent', () => {
  let component: FilterKnobsComponent;
  let fixture: ComponentFixture<FilterKnobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterKnobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterKnobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
