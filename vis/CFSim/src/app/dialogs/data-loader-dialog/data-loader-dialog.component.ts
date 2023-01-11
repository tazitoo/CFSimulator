// material imports 
import { MatDialogRef } from '@angular/material/dialog';

// state imports
import { DataState } from 'src/app/state/data.state';

// angular imports
import { AfterViewInit, Component, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

// local imports
import { DataLoaderDialogController } from './controller/data-loader-dialog.controller';
import { FilterManagerComponent } from 'src/app/components/filter-manager/filter-manager.component';
import { CounterfactualsState } from 'src/app/state/counterfactuals.state';
import { ParametersState } from 'src/app/state/parameters.state';

@Component({
  selector: 'app-data-loader-dialog',
  templateUrl: './data-loader-dialog.component.html',
  styleUrls: ['./data-loader-dialog.component.scss']
})
export class DataLoaderDialogComponent implements OnInit, AfterViewInit {

  // controller reference
  public dataLoaderDialogController: DataLoaderDialogController | null = null;

  // events
  @Output('onrowclicked') onrowclicked: EventEmitter<{row: any}> = new EventEmitter<{row: any}>();

  // dom refs
  @ViewChildren('filtermanagerref') filtermanagerref!: QueryList<FilterManagerComponent>;  //FilterManagerComponent;

  constructor( 
    public dialogRef: MatDialogRef<DataLoaderDialogComponent>, 
    public dataState: DataState,
    public counterfactualsState: CounterfactualsState,
    public parametersState: ParametersState ) {

    this.dataLoaderDialogController = new DataLoaderDialogController( this.dataState, this.counterfactualsState, this.parametersState );

  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    
    // initializing component
    this.dataLoaderDialogController?.initialize_controller( this.filtermanagerref );

    // initializing controller data
    this.dataLoaderDialogController?.initialize_data();
    
  }

  

}
