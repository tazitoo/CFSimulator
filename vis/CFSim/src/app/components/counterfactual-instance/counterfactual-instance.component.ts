// angular
import { Component, Input, OnInit } from '@angular/core';

// model
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';

@Component({
  selector: 'app-counterfactual-instance',
  templateUrl: './counterfactual-instance.component.html',
  styleUrls: ['./counterfactual-instance.component.scss']
})
export class CounterfactualInstanceComponent implements OnInit {

  @Input('counterfactualinstance') counterfactualInstance!: CounterfactualInstance;

  constructor() { }

  ngOnInit(): void {}



}
