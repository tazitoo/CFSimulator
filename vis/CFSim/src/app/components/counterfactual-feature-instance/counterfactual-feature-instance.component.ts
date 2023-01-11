import { Component, Input, OnInit } from '@angular/core';
import { CounterfactualFeatureInstance } from 'src/app/model/counterfactual-feature-instance.model';

@Component({
  selector: 'app-counterfactual-feature-instance',
  templateUrl: './counterfactual-feature-instance.component.html',
  styleUrls: ['./counterfactual-feature-instance.component.scss']
})
export class CounterfactualFeatureInstanceComponent implements OnInit {

  @Input('featureinstance') featureInstance!: CounterfactualFeatureInstance;

  constructor() { }

  ngOnInit(): void {

    
  }

}
