import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBuilderDialogComponent } from './action-builder-dialog.component';

describe('ActionBuilderDialogComponent', () => {
  let component: ActionBuilderDialogComponent;
  let fixture: ComponentFixture<ActionBuilderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionBuilderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBuilderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
