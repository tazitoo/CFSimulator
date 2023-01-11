import { Action } from "../model/action.model";
import { DataFilter } from "../model/data-filter.model";

export class Serializer {

    public static dataapi_get_dataset( dataFilters: DataFilter[], datasetName: string ): { 'datasetname': string, 'filters': DataFilter[] }{

        return { 'datasetname': datasetName, 'filters': dataFilters };

    }

    public static mlapi_update_counterfactual_examples_actions_parameter( actions: Action[] ): { [featureName: string]: number[] } {

        const serializedActions: { [featureName: string]: number[] } = {};
        actions.forEach( (action: Action) => {
            serializedActions[action.featureName] = [action.featureFloor, action.featureCeil];
        });

        return serializedActions;
    }

    public static mlapi_update_feature_suggestions( actions: Action[] ): any {
        return actions;
    }

}