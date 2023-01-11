import { DialogManager } from "src/app/dialogs/dialog-manager";

export class ToolbarController {

    constructor( public dialogManager: DialogManager ){}

    public open_dialog( dialogName: string ){

        this.dialogManager.open_dialog( dialogName );

    }


}