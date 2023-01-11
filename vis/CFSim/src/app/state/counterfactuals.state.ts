import { Injectable } from "@angular/core";
import { MLAPI } from "../api/ml.api";

import * as _ from 'lodash';

// models
import { CounterfactualInstance } from "../model/counterfactual-instance.model";
import { HistogramData } from "../model/types";
import { Deserializer } from "../serialization/deserializer";
import { CounterfactualsMetricsState } from "./counterfactuals-metrics.state";
import { DataState } from "./data.state";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsState {

    constructor( public dataState: DataState, public counterfactualsMetricsState: CounterfactualsMetricsState ){}

    public loadedCounterfactuals: { [uids: number]: CounterfactualInstance } = {};
    public filteredCounterfactuals: CounterfactualInstance[] = [];

    // current query instance
    public currentQueryInstance: any = {};
    public currentRowID: number = 0;


    public async load_counterfactual_examples( queryInstance: any, rowid: number,  parameters: {  ['samplesize']: number, ['modelname']: string }, constraints: { [featureName: string]: number[] } = {} ): Promise<void> {
        
        // saving current query instance
        this.currentQueryInstance = queryInstance;
        this.currentRowID = rowid;

        // requesting counterfactuals
        const response: {counterfactuals: any} = await MLAPI.get_counterfactual_set( queryInstance, rowid, parameters, constraints );

        const parsedCounterfactuals: { [uids: number]: CounterfactualInstance } = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        this.loadedCounterfactuals = parsedCounterfactuals;

        // saving counterfactual batch summary
        this.counterfactualsMetricsState.add_new_counterfactual_batch_summary( Object.values(this.loadedCounterfactuals) );

    }

    public async update_counterfactual_examples( parameters: {  ['samplesize']: number, ['modelname']: string }, constraints: { [featureName: string]: number[] } = {} ): Promise<void> {

        // requesting counterfactuals
        const response: {counterfactuals: any} = await MLAPI.get_counterfactual_set( this.currentQueryInstance, this.currentRowID, parameters, constraints );
        
        const parsedCounterfactuals: { [uids: number]: CounterfactualInstance } = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        this.loadedCounterfactuals = parsedCounterfactuals;

        // const parsedCounterfactuals: CounterfactualInstance[] = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        // this.loadedCounterfactuals = parsedCounterfactuals;

    }

    public get_features_histograms( features: string[] ): { [featureName: string]: HistogramData[] } {
        return this.dataState.loadedDataset.get_features_histograms( features );
    }

    // filters
    public filter_counterfactuals_by_sparsity( sparsity: number ): void {

        const filteredCounterfactuals: CounterfactualInstance[] = [];
        _.forEach( this.loadedCounterfactuals, (cf: CounterfactualInstance) => {
            if( cf.get_number_of_changing_features() == sparsity ) filteredCounterfactuals.push(cf);
        });

        this.filteredCounterfactuals = filteredCounterfactuals;

    }

    public filter_counterfactuals_by_uid( uids: number[] ): void {

        const filteredCounterfactuals: CounterfactualInstance[] = [];
        uids.forEach( (uid: number) => {
            filteredCounterfactuals.push( this.loadedCounterfactuals[uid] );
        });
        this.filteredCounterfactuals = filteredCounterfactuals;
    }

    public filter_counterfactuals_by_constraints( constraints: { [featureName: string]: number[] }): void {

        const filteredCounterfactuals: CounterfactualInstance[] = [];
        _.forEach( this.loadedCounterfactuals, (cf: CounterfactualInstance) => {
            if(cf.is_within_constraints(constraints)) filteredCounterfactuals.push(cf);
        });

        this.filteredCounterfactuals = filteredCounterfactuals;

    }

}