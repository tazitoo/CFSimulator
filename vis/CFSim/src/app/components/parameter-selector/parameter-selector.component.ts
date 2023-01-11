import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametersState } from 'src/app/state/parameters.state';
import { CustomFormBuilder } from 'src/app/utils/formbuilder.custom';
import { ParameterSelectorController } from './controller/parameter-selector.controller';

@Component({
  selector: 'app-parameter-selector',
  templateUrl: './parameter-selector.component.html',
  styleUrls: ['./parameter-selector.component.scss']
})
export class ParameterSelectorComponent implements OnInit {

  // controller reference
  public parameterSelectorController: ParameterSelectorController | null = null;

  // forms
  public parametersForm: FormGroup<any> = new FormGroup({});

  constructor( public formBuilder: FormBuilder, public parameterState: ParametersState ){

    this.parameterSelectorController = new ParameterSelectorController( this.parameterState );

  }

  ngOnInit(): void {

    // creating forms
    this.parametersForm = CustomFormBuilder.create_parameters_selector_form( this.formBuilder );
    const forms: { [ formName: string ]: FormGroup<any> } = { 'parametersForm': this.parametersForm };

    // initializing controller
    this.parameterSelectorController?.initialize_controller( forms );

  }

}
