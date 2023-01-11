import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogManager } from 'src/app/dialogs/dialog-manager';
import { Action } from 'src/app/model/action.model';
import { ActionsState } from 'src/app/state/actions.state';
import { DataState } from 'src/app/state/data.state';
import { ActionListController } from './controller/action-list.controller';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {

  // input variables
  @Input('datasetloaded') datasetLoaded: boolean = false;

  // output events emitters
  @Output('ondeleteclicked') ondeleteclicked: EventEmitter<{'action': Action, 'index': number}> = new EventEmitter<{'action': Action, 'index': number}>();

  // controller
  public actionListController: ActionListController | null = null;

  constructor( public dialogManager: DialogManager, public actionsState: ActionsState, public dataState: DataState ) { 

    this.actionListController = new ActionListController();

  }

  ngOnInit(): void {}

}
