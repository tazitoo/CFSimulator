import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBarplotComponent } from './static-barplot.component';

describe('StaticBarplotComponent', () => {
  let component: StaticBarplotComponent;
  let fixture: ComponentFixture<StaticBarplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticBarplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticBarplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
