import { Injectable } from "@angular/core";
import { DataAPI } from "../api/data.api";
import { DataFilter } from "../model/data-filter.model";
import { Dataset } from "../model/dataset.model";
import { Deserializer } from "../serialization/deserializer";

@Injectable({
    providedIn: 'root'
})

export class DataState {

    // currently loaded dataset
    public loadedDataset: Dataset = new Dataset([], [], [], {}, '');

    public async load_available_datasets(): Promise<string[]> {

        const availableDatasets: {'datasets': string[] } = await DataAPI.get_available_datasets();
        return availableDatasets.datasets;

    }

    public async load_dataset( datasetName: string, filters: DataFilter[] ): Promise<void> {

        const response: any = await DataAPI.get_dataset( datasetName, filters );
        this.loadedDataset = Deserializer.dataapi_get_dataset_deserializer( response, datasetName );
    
    }

}