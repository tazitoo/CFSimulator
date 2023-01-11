import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureVariationComponent } from './feature-variation.component';

describe('FeatureVariationComponent', () => {
  let component: FeatureVariationComponent;
  let fixture: ComponentFixture<FeatureVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureVariationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
