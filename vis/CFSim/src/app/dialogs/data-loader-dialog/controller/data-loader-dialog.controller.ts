// state imports
import { QueryList } from "@angular/core";
import { FilterManagerComponent } from "src/app/components/filter-manager/filter-manager.component";
import { DataFilter } from "src/app/model/data-filter.model";
import { CounterfactualsState } from "src/app/state/counterfactuals.state";
import { DataState } from "src/app/state/data.state";
import { ParametersState } from "src/app/state/parameters.state";

export class DataLoaderDialogController {

    // available datasets
    public availableDatasets: string[] = [];
 
    // elements refs
    public filterManagerRef!: QueryList<FilterManagerComponent>;

    constructor( public dataState: DataState, public counterfactualsState: CounterfactualsState, public parametersState: ParametersState ){}
    
    public async initialize_data(): Promise<void> {

        const availableDatasets: any = await this.dataState.load_available_datasets();
        this.availableDatasets = availableDatasets;
    
    }

    public initialize_controller( filterManagerref: QueryList<FilterManagerComponent> ): void {

        this.filterManagerRef = filterManagerref;

    }

    public load_dataset( event: any, filters: DataFilter[] = [] ): void {

        this.dataState.load_dataset( event.value, filters );

        // clearing old filters
        if(this.dataState.loadedDataset.is_loaded()){
            this.clear_filters();
        }
        

    }

    public on_filters_update( filters: DataFilter[] ): void {

        if(this.dataState.loadedDataset.is_loaded()){
            this.dataState.load_dataset( this.dataState.loadedDataset.name, filters );
        }
    }

    public clear_filters(): void {

        this.filterManagerRef.first.filterManagerController?.clear_filters();

    }

    public on_row_selected( event: any ): void {

        // TODO: Look at this afterwords and think how to not embbed the row id into the data row

        const rowid: number = event.queryinstance.id;

        // copying instance
        const queryInstance = JSON.parse(JSON.stringify(event.queryinstance));
        delete queryInstance['id'];
        delete queryInstance['proba'];

        this.counterfactualsState.load_counterfactual_examples( event.queryinstance, rowid, this.parametersState.get_current_parameters() );

    }

    


   

    

}