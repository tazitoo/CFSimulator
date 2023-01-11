import { HistogramData } from "./types";

export class Dataset {

    constructor( 
        public features: string[], 
        public rows: any[], 
        public predictions: number[],
        private histograms: { [featureName: string]: HistogramData[]  },
        public name: string ){}


    public get_feature_histogram( featureName: string ): HistogramData[] {
        return this.histograms[featureName];
    }

    public get_features_histograms( featureNames: string[] ): { [featureName: string]: HistogramData[] } {

        const featureHistograms: { [featureName: string]: HistogramData[] } = {};
        featureNames.forEach( (featureName: string) => {
            featureHistograms[featureName] = this.histograms[featureName];
        })

        return featureHistograms;

    }

    
    public is_loaded(): boolean{
        return this.features.length !== 0;
    }

    public sort_rows( featureName: string, ascending: boolean ): void {

        // sorting current dataset
        this.rows.sort( (a, b) => {
            return (a[featureName] < b[featureName] ? -1 : 1) * (ascending ? 1 : -1);
        });

        // creating a new copy
        this.rows = this.rows.slice();
        
    }

    

}