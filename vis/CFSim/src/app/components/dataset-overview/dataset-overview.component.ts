// angular imports
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';

// state imports
import { DataState } from 'src/app/state/data.state';

// local imports
import { DatasetOverviewController } from './controller/dataset-overview.controller';


@Component({
  selector: 'app-dataset-overview',
  templateUrl: './dataset-overview.component.html',
  styleUrls: ['./dataset-overview.component.scss']
})
export class DatasetOverviewComponent implements OnInit {

  // controller
  public datasetOverviewController: DatasetOverviewController | null = null;

  // events
  @Output('onrowclicked') onrowclicked: EventEmitter<any> = new EventEmitter<any>();

  constructor( public dataState: DataState ) {

    // events dict
    const events: { [eventname: string]: EventEmitter<any> } = {
      'onrowclicked': this.onrowclicked
    }

    // creating controller
    this.datasetOverviewController = new DatasetOverviewController( this.dataState, events );

  }

  ngOnInit(): void {}


  // TODO: Remove it from here
  sort_overview_table(sort: Sort){
    if(sort.direction) this.dataState.loadedDataset.sort_rows( sort.active, sort.direction == 'asc' );
  }

}
