import { CounterfactualFeatureInstance } from "./counterfactual-feature-instance.model";

// third-party
import * as _ from 'lodash';

export class CounterfactualInstance {

    // fast access to feature instsances
    public featureRefs: { [featureName: string]: CounterfactualFeatureInstance } = {};

    constructor( public uid: number, public featureInstances : CounterfactualFeatureInstance[], public projectedX: number, public projectedY: number ){

        // indexing features by name
        _.forEach( featureInstances, (featureInstance: CounterfactualFeatureInstance) => {

            this.featureRefs[featureInstance.featureName] = featureInstance;

        });

    }

    public is_within_constraints( constraints: { [featureName: string]: number[] } ): boolean {
        
        let withinBounds: boolean = true;
        _.forOwn( constraints, (value, key) => {

            const currentFeature: CounterfactualFeatureInstance = this.featureRefs[ key ];
            if( withinBounds ) withinBounds = currentFeature.is_within_bounds( value );

        });

        return withinBounds;
    }

    public get_number_of_changing_features(): number {
        return this.get_changing_features().length;
    }

    public get_changing_features(): CounterfactualFeatureInstance[] {

        const changingFeatures: CounterfactualFeatureInstance[] = [];
        this.featureInstances.forEach( (featureInstance: CounterfactualFeatureInstance) => {
            if( featureInstance.is_changing() ) changingFeatures.push(featureInstance);
        });

        return changingFeatures;

    }

    public get_changing_features_names(): string[] {

        const changingFeatures: string[] = [];
        this.featureInstances.forEach( (featureInstance: CounterfactualFeatureInstance) => {
            if( featureInstance.is_changing() ) changingFeatures.push(featureInstance.featureName);
        });

        return changingFeatures;

    }

}