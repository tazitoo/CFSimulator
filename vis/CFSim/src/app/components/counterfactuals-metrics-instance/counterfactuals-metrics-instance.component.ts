import { Component, Input, OnInit } from '@angular/core';
import { CounterfactualsMetrics } from 'src/app/model/counterfactual-summary.model';

@Component({
  selector: 'app-counterfactuals-metrics-instance',
  templateUrl: './counterfactuals-metrics-instance.component.html',
  styleUrls: ['./counterfactuals-metrics-instance.component.scss']
})
export class CounterfactualsMetricsInstanceComponent implements OnInit {

  @Input('metrics') metrics!: CounterfactualsMetrics;

  constructor() { }

  ngOnInit(): void {}

}
