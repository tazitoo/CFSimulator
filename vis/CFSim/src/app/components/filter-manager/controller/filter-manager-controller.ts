import { EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataFilter } from "src/app/model/data-filter.model";
import { DataState } from "src/app/state/data.state";

export class FilterManagerController {

    // applied filters
    public appliedFilters: DataFilter[] = [];

    // forms
    public createdForms: { [ formName: string ]: FormGroup<any> } = {};

    // events
    public events: { [ eventName: string ]: EventEmitter<any> } = {};

    constructor( public formBuilder: FormBuilder ){}

    public initialize_controller( forms: { [ formName: string ]: FormGroup<any> }, events: { [ eventName: string ]: EventEmitter<any> } ): void {

        // saving form refs
        this.createdForms = forms;

        // saving events refs
        this.events = events;

    }

    public add_filter(): void{

        // adding filter
        const featureName: string = this.createdForms['filterCreationForm'].value['featurename'];
        const newFilter: DataFilter = new DataFilter( featureName );

        this.appliedFilters.push(newFilter);
    
    }

    public update_filter( currentFilter: DataFilter, newSelection: number[] ){

        currentFilter.update_filter( newSelection[0], newSelection[1] );

        // firing up filters
        this.events['onfilterupdated'].emit({'filters': this.appliedFilters });

    }

    public clear_filters(): void {

        this.appliedFilters = [];
    }

}