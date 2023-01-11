import { Injectable } from "@angular/core";
import { CONSTANTS } from "../config/constants";

@Injectable({
    providedIn: 'root'
})

export class ParametersState {


    public parameterSet: {  ['samplesize']: number, ['modelname']: string } = {
            samplesize: 10,
            modelname: 'DICE'
        }

    public set_current_parameters( currentParameters:  {  ['samplesize']: number, ['modelname']: string } ): void {
        this.parameterSet = currentParameters;
    }

    public get_current_parameters(): {  ['samplesize']: number, ['modelname']: string } {
        return this.parameterSet;
    }

    public get_available_parameter_values(): {  ['models']: string[] } {
        return { 'models': CONSTANTS.MODELS };
    }


}