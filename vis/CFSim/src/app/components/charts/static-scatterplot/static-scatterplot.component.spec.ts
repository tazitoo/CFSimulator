import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticScatterplotComponent } from './static-scatterplot.component';

describe('StaticScatterplotComponent', () => {
  let component: StaticScatterplotComponent;
  let fixture: ComponentFixture<StaticScatterplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticScatterplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
