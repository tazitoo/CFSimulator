import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';
import { CounterfactualsState } from 'src/app/state/counterfactuals.state';
import { CounterfactualListController } from './controller/counterfactual-list.controller';

@Component({
  selector: 'app-counterfactual-list',
  templateUrl: './counterfactual-list.component.html',
  styleUrls: ['./counterfactual-list.component.scss']
})
export class CounterfactualListComponent implements OnInit, OnChanges {

  // controller ref
  public counterfactualListController: CounterfactualListController | null = null;

  @Input('counterfactuallist') counterfactuallist: CounterfactualInstance[] = [];

  constructor( public counterfactualsState: CounterfactualsState ) { }

  ngOnInit(): void {

    this.counterfactualListController = new CounterfactualListController();

  }


  ngOnChanges(changes: SimpleChanges): void {

    if( !changes['counterfactuallist'].firstChange ){

      this.counterfactualListController?.update_counterfactual_list( this.counterfactuallist );
      
    }

  }


}
