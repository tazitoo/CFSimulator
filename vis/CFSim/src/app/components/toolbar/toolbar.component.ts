import { Component, OnInit } from '@angular/core';
import { DialogManager } from 'src/app/dialogs/dialog-manager';
import { ToolbarController } from './controller/toolbar.controller';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // controller reference
  public toolbarController: ToolbarController | null = null;

  constructor( public dialogManager: DialogManager ) { 

    // controller instance
    this.toolbarController = new ToolbarController( this.dialogManager );

  }

  ngOnInit(): void {}

}
