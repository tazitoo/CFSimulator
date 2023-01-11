import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HistogramData } from 'src/app/model/types';
import { SelectorHistogramController } from './controller/selector-histogram.controller';

@Component({
  selector: 'app-selector-histogram',
  templateUrl: './selector-histogram.component.html',
  styleUrls: ['./selector-histogram.component.scss']
})
export class SelectorHistogramComponent implements OnInit, OnChanges, AfterViewInit {

  // controller reference
  public selectorHistogramController: SelectorHistogramController | null = null;

  // dom refs
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;

  // input variables
  @Input('title') title: string | undefined = '';
  @Input('histdata') histdata: HistogramData[] | undefined = []; 
  @Input('updatable') updatable: boolean = true;

  // event emitters
  @Output('onbrushend') onbrushend: EventEmitter<{'selection': number[]}> = new EventEmitter<{'selection': number[]}>();

  constructor() {

    this.selectorHistogramController = new SelectorHistogramController();

  }

  ngOnInit(): void {

    // initializing controller
    const customEvents: { [eventname: string]: EventEmitter<any> } = { 'onbrushend': this.onbrushend };
    this.selectorHistogramController?.initialize_controller( customEvents );

  }

  ngOnChanges( changes: SimpleChanges ): void {

    if( 'histdata' in changes && changes['histdata'] && changes['histdata'].currentValue.length > 0 && this.chartContainerRef && this.updatable ){
      this.selectorHistogramController?.render_chart( this.chartContainerRef.nativeElement, changes['histdata'].currentValue );
    }

  }

  ngAfterViewInit(): void {

    if( this.histdata!?.length > 0 && this.chartContainerRef ){
      this.selectorHistogramController?.render_chart( this.chartContainerRef.nativeElement, this.histdata! );
    }
     
  }

}