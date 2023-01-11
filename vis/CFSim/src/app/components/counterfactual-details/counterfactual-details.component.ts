import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CounterfactualFeatureInstance } from 'src/app/model/counterfactual-feature-instance.model';
import { HistogramData } from 'src/app/model/types';

@Component({
  selector: 'app-counterfactual-details',
  templateUrl: './counterfactual-details.component.html',
  styleUrls: ['./counterfactual-details.component.scss']
})
export class CounterfactualDetailsComponent implements OnInit {

  @Input('cffeatureinstances') cffeatureinstances: CounterfactualFeatureInstance[] = [];
  @Input('featureHistograms') featureHistograms: { [featureName: string]: HistogramData[] } = {};

  constructor() { }

  ngOnInit(): void {}

}
