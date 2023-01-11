import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StaticLineController } from './controller/static-line.controller';

@Component({
  selector: 'app-static-line',
  templateUrl: './static-line.component.html',
  styleUrls: ['./static-line.component.scss']
})
export class StaticLineComponent implements OnInit, AfterViewInit {

  // controller ref
  public staticLineController: StaticLineController | null = null;

  // dom refs
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;

  constructor() {

    this.staticLineController = new StaticLineController();

   }

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    // rendering chart
    this.staticLineController?.render_chart( this.chartContainerRef.nativeElement );

  }

}
