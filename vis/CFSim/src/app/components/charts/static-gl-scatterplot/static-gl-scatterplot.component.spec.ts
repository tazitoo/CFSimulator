import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticGlScatterplotComponent } from './static-gl-scatterplot.component';

describe('StaticGlScatterplotComponent', () => {
  let component: StaticGlScatterplotComponent;
  let fixture: ComponentFixture<StaticGlScatterplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticGlScatterplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticGlScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
