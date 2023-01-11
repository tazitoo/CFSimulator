import { Component, OnInit } from '@angular/core';
import { ActionsState } from 'src/app/state/actions.state';
import { CounterfactualsMetricsState } from 'src/app/state/counterfactuals-metrics.state';
import { CounterfactualsState } from 'src/app/state/counterfactuals.state';
import { DataState } from 'src/app/state/data.state';
import { ParametersState } from 'src/app/state/parameters.state';
import { MainViewController } from './controllers/main-view.controller';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./styles/main-view.component.scss', './styles/main-view.large.component.scss', './styles/main-view.medium.component.scss']
})

export class MainViewComponent implements OnInit {

  // controllers
  public mainViewController: MainViewController | null = null;

  constructor( 
    public dataState: DataState, 
    public counterfactualsState: CounterfactualsState, 
    public parametersState: ParametersState,
    public actionState: ActionsState,
    public counterfactualsMetricsState: CounterfactualsMetricsState ) { 

    this.mainViewController = new MainViewController( this.dataState, this.counterfactualsState, this.parametersState, this.actionState );

  }

  ngOnInit(): void {}

}
