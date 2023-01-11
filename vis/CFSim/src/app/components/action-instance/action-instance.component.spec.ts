import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInstanceComponent } from './action-instance.component';

describe('ActionInstanceComponent', () => {
  let component: ActionInstanceComponent;
  let fixture: ComponentFixture<ActionInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
