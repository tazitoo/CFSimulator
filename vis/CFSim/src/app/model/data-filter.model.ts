export class DataFilter {

    constructor( public featureName: string, public featureFloor: number = 0, public featureCeil: number = 0 ){}

    public update_filter( featureFloor: number, featureCeil: number ): void {

        this.featureFloor = featureFloor;
        this.featureCeil = featureCeil;
        
    }

}