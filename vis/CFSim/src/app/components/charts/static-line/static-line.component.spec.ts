import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticLineComponent } from './static-line.component';

describe('StaticLineComponent', () => {
  let component: StaticLineComponent;
  let fixture: ComponentFixture<StaticLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
