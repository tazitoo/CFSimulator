import { Injectable } from "@angular/core";
import { CounterfactualInstance } from "../model/counterfactual-instance.model";
import { CounterfactualsMetrics } from "../model/counterfactual-summary.model";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsMetricsState {

    // counterfactual summary batch
    public counterfactualBatchMetrics: CounterfactualsMetrics[] = [];

    constructor(){}

    public add_new_counterfactual_batch_summary( counterfactualInstances: CounterfactualInstance[] ): void {

        let averageSparsity: number = 0;
        counterfactualInstances.forEach( (cf: CounterfactualInstance) => {
            averageSparsity += cf.get_number_of_changing_features();
        });
        averageSparsity = averageSparsity / counterfactualInstances.length;
        const currentCounterfactualBatchMetrics: CounterfactualsMetrics = new CounterfactualsMetrics( averageSparsity );
        this.counterfactualBatchMetrics.push( currentCounterfactualBatchMetrics );

    }


}