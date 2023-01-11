import { Injectable } from "@angular/core";
import { MLAPI } from "../api/ml.api";
import { Action } from "../model/action.model";
import { FeatureSuggestion } from "../model/feature-suggestion.model";
import { Deserializer } from "../serialization/deserializer";

@Injectable({
    providedIn: 'root'
})

export class FeatureSuggestionState {

    public currentSuggestedFeatures: FeatureSuggestion[] = [];

    public async update_suggestions( actions: Action[] ): Promise<void> {

        const response: any = await MLAPI.get_suggested_features( actions );

        // deserializing response
        this.currentSuggestedFeatures = Deserializer.mlapi_get_feature_suggestions(response);

    }

}