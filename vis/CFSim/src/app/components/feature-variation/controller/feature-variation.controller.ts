import { CounterfactualInstance } from "src/app/model/counterfactual-instance.model";

export class FeatureVariationController {

    // feature variation vectors
    public positiveFeatureVariation: { 'classname': string, 'value': number }[] = [];
    public negativeFeatureVariation: { 'classname': string, 'value': number }[] = [];

    constructor(){}

    public on_counterfactual_list_updated( counterfactualList: CounterfactualInstance[] ): void {

        const positiveFeatureVariation = [];
        const negativeFeatureVariation = [];
        for(let i=0; i<15; i++){

            positiveFeatureVariation.push( { 'classname': 'a', 'value': Math.random()*100 });
            negativeFeatureVariation.push( { 'classname': 'a', 'value': Math.random()*100 });

        }

        this.positiveFeatureVariation = positiveFeatureVariation;
        this.negativeFeatureVariation = negativeFeatureVariation;

        // // TODO: parse counterfactual list to variation
        // this.positiveFeatureVariation = [
        //     { 'classname': 'a', 'value': 10 },
        //     { 'classname': 'a', 'value': 20 },
        //     { 'classname': 'a', 'value': 30 },
        //     { 'classname': 'a', 'value': 40 },
        //     { 'classname': 'a', 'value': 50 },
        //     { 'classname': 'a', 'value': 40 },
        //     { 'classname': 'a', 'value': 30 },
        //     { 'classname': 'a', 'value': 60 },
        //     { 'classname': 'a', 'value': 70 },
        // ];

        // this.negativeFeatureVariation = [
        //     { 'classname': 'a', 'value': 10 },
        //     { 'classname': 'a', 'value': 20 },
        //     { 'classname': 'a', 'value': 30 },
        //     { 'classname': 'a', 'value': 40 },
        //     { 'classname': 'a', 'value': 50 },
        //     { 'classname': 'a', 'value': 40 },
        //     { 'classname': 'a', 'value': 30 },
        //     { 'classname': 'a', 'value': 60 },
        //     { 'classname': 'a', 'value': 70 },
        // ]

    }
    
}