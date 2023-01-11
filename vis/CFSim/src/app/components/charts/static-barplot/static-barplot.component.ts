import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { StaticBarplotController } from './controller/static-barplot.controller';

@Component({
  selector: 'app-static-barplot',
  templateUrl: './static-barplot.component.html',
  styleUrls: ['./static-barplot.component.scss']
})
export class StaticBarplotComponent implements OnInit, OnChanges {

  // controller ref
  public staticBarplotController: StaticBarplotController | null = null;

  // input data
  @Input('data') data :{ 'classname': string, 'value': number }[] = [];

  // dom refs
  @ViewChild('chartcontainerref') chartcontainerref!: ElementRef;

  constructor() { 

    this.staticBarplotController = new StaticBarplotController();

  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if( 'data' in changes && changes['data'] && changes['data'].currentValue.length > 0 ){
      this.staticBarplotController?.render_chart( this.chartcontainerref.nativeElement, this.data );
    }

  }
}
