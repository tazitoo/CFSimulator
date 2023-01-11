import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHistogramComponent } from './selector-histogram.component';

describe('SelectorHistogramComponent', () => {
  let component: SelectorHistogramComponent;
  let fixture: ComponentFixture<SelectorHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorHistogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
