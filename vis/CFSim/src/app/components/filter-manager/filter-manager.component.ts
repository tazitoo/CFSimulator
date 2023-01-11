import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataFilter } from 'src/app/model/data-filter.model';
import { DataState } from 'src/app/state/data.state';
import { CustomFormBuilder } from 'src/app/utils/formbuilder.custom';
import { FilterManagerController } from './controller/filter-manager-controller';

@Component({
  selector: 'app-filter-manager',
  templateUrl: './filter-manager.component.html',
  styleUrls: ['./filter-manager.component.scss']
})
export class FilterManagerComponent implements OnInit {

  // controller
  public filterManagerController: FilterManagerController | null = null;

  // forms
  public filterCreationForm: FormGroup<any> = new FormGroup({});

  // input variables
  @Input('availablefeatures') availablefeatures: string[] = [];

  // output events
  @Output('onfilterupdated') onfilterupdated: EventEmitter<{'filters': DataFilter[]}> = new EventEmitter<{'filters': DataFilter[]}>();

  constructor( public dataState: DataState, public formBuilder: FormBuilder ) {

    this.filterManagerController = new FilterManagerController( this.formBuilder );

  }

  ngOnInit(): void {

    // creating forms
    this.filterCreationForm = CustomFormBuilder.create_filter_creation_form( this.formBuilder );
    const forms: { [ formName: string ]: FormGroup<any> } = { 'filterCreationForm': this.filterCreationForm };

    // event emitters
    const events: { [ eventName: string ]: EventEmitter<any> } = {'onfilterupdated': this.onfilterupdated};

    this.filterManagerController?.initialize_controller( forms, events );

  }

}
