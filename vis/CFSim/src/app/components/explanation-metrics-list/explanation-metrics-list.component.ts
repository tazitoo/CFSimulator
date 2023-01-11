import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';
import { CounterfactualsMetrics } from 'src/app/model/counterfactual-summary.model';

@Component({
  selector: 'app-explanation-metrics-list',
  templateUrl: './explanation-metrics-list.component.html',
  styleUrls: ['./explanation-metrics-list.component.scss']
})
export class ExplanationMetricsListComponent implements OnInit, OnChanges {


  // input data
  // @Input('metrics') metrics: CounterfactualsMetrics[] = [];
  @Input('filteredcounterfactuals') filteredcounterfactuals: CounterfactualInstance[] = [];

  // metric
  public averageSparsity: number = 0;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if( 'filteredcounterfactuals' in changes && changes['filteredcounterfactuals'] && changes['filteredcounterfactuals'].currentValue.length > 0  ){

      let averageSparsity: number = 0;
      this.filteredcounterfactuals.forEach( (cf: CounterfactualInstance) => {
            averageSparsity += cf.get_number_of_changing_features();
        });
      this.averageSparsity = averageSparsity / this.filteredcounterfactuals.length;


        // const currentCounterfactualBatchMetrics: CounterfactualsMetrics = new CounterfactualsMetrics( averageSparsity );
        // this.counterfactualBatchMetrics.push( currentCounterfactualBatchMetrics );

      // this.selectorHistogramController?.render_chart( this.chartContainerRef.nativeElement, changes['histdata'].currentValue );
    } else if( changes['filteredcounterfactuals'].currentValue.length == 0 ){
      this.averageSparsity = 0;
    }

  } 


}
