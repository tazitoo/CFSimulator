export class CounterfactualFeatureInstance {

    constructor( 
        public featureName: string, 
        public oldValue: number, 
        public newValue: number, 
        public variation: number){}
    
    public is_changing(): boolean{
        return this.variation !== 0;
    }

    public is_within_bounds( bounds: number[] ): boolean {
        return (this.newValue >= bounds[0]) && (this.newValue <= bounds[1]);  
    }

}