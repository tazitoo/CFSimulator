import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHistogramComponent } from './static-histogram.component';

describe('StaticHistogramComponent', () => {
  let component: StaticHistogramComponent;
  let fixture: ComponentFixture<StaticHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticHistogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
