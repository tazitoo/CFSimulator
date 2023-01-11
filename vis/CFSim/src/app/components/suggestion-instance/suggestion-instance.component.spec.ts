import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionInstanceComponent } from './suggestion-instance.component';

describe('SuggestionInstanceComponent', () => {
  let component: SuggestionInstanceComponent;
  let fixture: ComponentFixture<SuggestionInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
