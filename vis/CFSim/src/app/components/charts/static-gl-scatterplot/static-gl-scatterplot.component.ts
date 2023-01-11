import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { StaticGlScatterplotController } from './controller/static-gl-scatterplot.controller';

@Component({
  selector: 'app-static-gl-scatterplot',
  templateUrl: './static-gl-scatterplot.component.html',
  styleUrls: ['./static-gl-scatterplot.component.scss']
})
export class StaticGlScatterplotComponent implements OnInit, OnChanges {

  // controller ref
  public staticGLScatterplotController: StaticGlScatterplotController | null = null;

  // dom ref
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;
  @ViewChild('chartlegendcontainerref') chartlegendcontainerref!: ElementRef;

  // input data
  @Input('datapoints') datapoints: { 'coords': number[][], 'uids': number[], 'sparsity': number[] } = { 'coords': [], 'uids': [], 'sparsity': [] };
  @Input('currentselection') currentselection: number[] = [];

  // events
  @Output('onpointsselected') onpointsselected: EventEmitter<{'uids': number[]}> = new EventEmitter<{'uids': number[]}>();

  constructor() { 

    this.staticGLScatterplotController = new StaticGlScatterplotController();

  }

  ngOnInit(): void {

    const events: { [eventname: string]: EventEmitter<any> } = {'onpointsselected': this.onpointsselected};
    this.staticGLScatterplotController?.initialize_controller( events );
    
  }

  ngOnChanges(changes: SimpleChanges): void { 

    if( 'datapoints' in changes && changes['datapoints'] && changes['datapoints'].currentValue.coords.length > 0 && this.chartContainerRef ){
      this.staticGLScatterplotController?.initialize_projection( this.chartContainerRef.nativeElement, this.chartlegendcontainerref.nativeElement, this.datapoints.coords, this.datapoints.uids, this.datapoints.sparsity );
    }

    if( 'currentselection' in changes && changes['currentselection'] && changes['currentselection'].currentValue.length > 0 && this.chartContainerRef ){
      this.staticGLScatterplotController?.select_points( changes['currentselection'].currentValue );
    }


  }

}
