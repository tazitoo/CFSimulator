import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';
import { FeatureVariationController } from './controller/feature-variation.controller';

@Component({
  selector: 'app-feature-variation',
  templateUrl: './feature-variation.component.html',
  styleUrls: ['./feature-variation.component.scss']
})
export class FeatureVariationComponent implements OnInit, OnChanges {

  // controller ref
  public featureVariationController: FeatureVariationController | null = null;

  // input data
  @Input('filteredcounterfactuals') filteredcounterfactuals: CounterfactualInstance[] = [];

  constructor() { 

    this.featureVariationController = new FeatureVariationController();

  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    
    if( 'filteredcounterfactuals' in changes && !changes['filteredcounterfactuals'].firstChange && changes['filteredcounterfactuals'].currentValue != 0 ){
      this.featureVariationController?.on_counterfactual_list_updated( changes['filteredcounterfactuals'].currentValue );
    }

  }

}
