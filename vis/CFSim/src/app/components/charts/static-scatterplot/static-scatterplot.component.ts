import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { StaticScatterplotController } from './controller/static-scatterplot.controller';

@Component({
  selector: 'app-static-scatterplot',
  templateUrl: './static-scatterplot.component.html',
  styleUrls: ['./static-scatterplot.component.scss']
})
export class StaticScatterplotComponent implements OnInit, OnChanges {

  // controller
  public staticScatterplotController: StaticScatterplotController | null = null;

  // dom refs
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;

  // Input data
  @Input('data') data:{x: number, y: number, sparsity: number}[] | undefined = [];

  constructor() { 

    this.staticScatterplotController = new StaticScatterplotController();

  }

  ngOnInit(): void {}


  ngOnChanges(changes: SimpleChanges): void {

    if( !changes['data'].firstChange && changes['data'].currentValue.length > 0){
      this.staticScatterplotController?.render_chart( this.chartContainerRef.nativeElement, this.data! );
    }
    
  }

}
