// models
import  { CounterfactualFeatureInstance } from '../model/counterfactual-feature-instance.model';
import { CounterfactualInstance } from '../model/counterfactual-instance.model';
import { Dataset } from "../model/dataset.model";
import { FeatureSuggestion } from '../model/feature-suggestion.model';
import { HistogramData } from '../model/types';


export class Deserializer {

    public static dataapi_get_dataset_deserializer( requestobj: any, datasetName: string ): Dataset {

        // parsing features
        const histograms: { [featureName: string]: HistogramData[] } = requestobj.histograms;
        const features: string[] = requestobj.features;
        const predictions: number [] = requestobj.predictions;
        const body: any[] = requestobj.rows.map( (element: any, index: number) => {
            
            const row: any = {};
            element.forEach( ( currentValue: any, valueIndex: number ) => {
                const featureName: string = features[valueIndex];
                row[featureName] = currentValue;
            });

            return row;
        });

        // creating object
        return new Dataset( features, body, predictions, histograms, datasetName );
    }

    public static mlapi_get_counterfactual_set( requestobj: any[] ): { [uids: number]: CounterfactualInstance } {

        const parsedCounterfactualList: { [uids: number]: CounterfactualInstance } = {};
        requestobj.forEach( (cfinstance: any, index: number) => {
            
            const currentCounterfactualFeatureInstanceList: CounterfactualFeatureInstance[] = [];
            cfinstance['featureInstances'].forEach( (cfFeatureInstance: any, index: number ) => {
                
                const currentCounterfactualFeatureInstance: CounterfactualFeatureInstance = new CounterfactualFeatureInstance( cfFeatureInstance['featureName'], cfFeatureInstance['oldValue'], cfFeatureInstance['newValue'], cfFeatureInstance['variation']  );
                currentCounterfactualFeatureInstanceList.push( currentCounterfactualFeatureInstance );

            });

            // creating counterfactual instance object
            const currentCounterFactualInstance: CounterfactualInstance = new CounterfactualInstance( cfinstance['uid'], currentCounterfactualFeatureInstanceList, cfinstance['projectedX'], cfinstance['projectedY'] );
            parsedCounterfactualList[currentCounterFactualInstance.uid] = currentCounterFactualInstance;
            // parsedCounterfactualList.push( currentCounterFactualInstance );
            

        });
    

        return parsedCounterfactualList;
    }

    public static mlapi_get_feature_suggestions( requestObj: any ): FeatureSuggestion[] {

        const suggestedFeatures: any[] = requestObj['suggestedfeatures'];
        const parsedSuggestedFeatures: FeatureSuggestion[] = [];
        
        suggestedFeatures.forEach( (feature: any) => {
            const currentSuggestionFeature: FeatureSuggestion = new FeatureSuggestion( feature.featureName, 0, 0, feature.score );
            parsedSuggestedFeatures.push(currentSuggestionFeature);
        });

        return parsedSuggestedFeatures;

    }

}
