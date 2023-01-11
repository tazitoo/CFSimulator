import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action } from 'src/app/model/action.model';
import { HistogramData } from 'src/app/model/types';

@Component({
  selector: 'app-action-instance',
  templateUrl: './action-instance.component.html',
  styleUrls: ['./action-instance.component.scss']
})
export class ActionInstanceComponent implements OnInit {

  @Input('actioninstance') actionInstance!: Action;
  @Input('histdata') histData!: HistogramData[];

  // output events emitters
  @Output('ondeleteclicked') ondeleteclicked: EventEmitter<{'action': Action}> = new EventEmitter<{'action': Action}>();

  constructor() { }

  ngOnInit(): void {}

}
