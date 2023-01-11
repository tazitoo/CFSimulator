import { FormGroup } from "@angular/forms";
import { ParametersState } from "src/app/state/parameters.state";

export class ParameterSelectorController {

    // created forms
    public createdForms: { [ formName: string ]: FormGroup<any> } = {};

    constructor( public parameterState: ParametersState ){}

    public initialize_controller( forms: { [ formName: string ]: FormGroup<any> } ): void {
        this.createdForms = forms;
    }

    public set_current_parameters(): void {
        this.parameterState.set_current_parameters( this.createdForms['parametersForm'].value );
    }
}