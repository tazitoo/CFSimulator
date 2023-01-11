
import { Action } from "src/app/model/action.model";
import { Serializer } from "src/app/serialization/serializer";
import { ActionsState } from "src/app/state/actions.state";
import { CounterfactualsState } from "src/app/state/counterfactuals.state";
import { DataState } from "src/app/state/data.state";
import { ParametersState } from "src/app/state/parameters.state";

export class MainViewController {

    constructor( 
        public dataState: DataState, 
        public counterfactualsState: CounterfactualsState,
        public parametersState: ParametersState,
        public actionState: ActionsState ){}

    public counterfactual_points_selected( event: {'uids': number[] }): void {

        this.counterfactualsState.filter_counterfactuals_by_uid( event.uids );
    }

    public action_deleted( event: {action: Action, index: number} ): void {
        
        // deleting action
        this.actionState.delete_action( event.action, event.index );

        // updating main list
        this.counterfactualsState.filter_counterfactuals_by_constraints( Serializer.mlapi_update_counterfactual_examples_actions_parameter( this.actionState.created_actions ) );
    }

    public filters_changed( event: any ): void{

        this.counterfactualsState.filter_counterfactuals_by_sparsity( event.sparsity );

    }

}