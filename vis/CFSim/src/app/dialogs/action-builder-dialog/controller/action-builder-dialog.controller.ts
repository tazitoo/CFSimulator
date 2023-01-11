import { FormGroup } from "@angular/forms";
import { Action } from "src/app/model/action.model";
import { HistogramData } from "src/app/model/types";
import { Serializer } from "src/app/serialization/serializer";
import { ActionsState } from "src/app/state/actions.state";
import { CounterfactualsState } from "src/app/state/counterfactuals.state";
import { DataState } from "src/app/state/data.state";
import { FeatureSuggestionState } from "src/app/state/feature-suggestion.state";

export class ActionBuilderDialogController {

    // created forms
    public createdForms: { [ formName: string ]: FormGroup<any> } = {};

    // current selector histogram
    public histTitle: string = '';
    public histData: HistogramData[] = [];
    public histCurrentSelection: number[] = [];

    constructor( 
            public actionsState: ActionsState, 
            public dataState: DataState, 
            public counterfactualsState: CounterfactualsState,
            public featureSuggestionState: FeatureSuggestionState ){}

    public initialize_controller( forms: { [ formName: string ]: FormGroup<any> } ): void {

        // saving forms refs
        this.createdForms = forms;

    }

    public update_histogram_data( event: any ): void { 

        // getting histograms
        const featureName: string = event.value;
        const hisData: HistogramData[] = this.dataState.loadedDataset.get_feature_histogram(featureName);
        
        // updating variables
        this.histTitle = featureName;
        this.histData = hisData;
    }

    public update_histogram_selection( histSelection: number[] ): void {

        // updating the selection
        this.histCurrentSelection = histSelection;

    }

    public add_action(): void { 

        // updating form
        this.createdForms['actionBuilderForm'].setValue({
            'featurename': this.histTitle,
            'featurefloor': this.histCurrentSelection[0],
            'featureceil': this.histCurrentSelection[1]});

        // adding constraint
        this.actionsState.add_action( this.createdForms['actionBuilderForm'].value );    

        // requerying for counterfactuals
        const currentActions: Action[] = this.actionsState.created_actions;
        const serializedActions: { [featureName: string]: number[] } = Serializer.mlapi_update_counterfactual_examples_actions_parameter( currentActions );
    
        // this.counterfactualsState.update_counterfactual_examples( {samplesize: 10, modelname: 'DICE'},  serializedActions );
        this.counterfactualsState.filter_counterfactuals_by_constraints(serializedActions );

        // updating feature suggestions
        this.featureSuggestionState.update_suggestions( this.actionsState.created_actions );
    }

}