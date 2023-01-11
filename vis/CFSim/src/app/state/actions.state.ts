import { Injectable } from "@angular/core";
import { MLAPI } from "../api/ml.api";
import { Action } from "../model/action.model";
import { Serializer } from "../serialization/serializer";


@Injectable({
    providedIn: 'root'
})

export class ActionsState {


    public created_actions: Action[] = [];

    public add_action( action: {'featurename': string, 'featurefloor': number, 'featureceil': number } ): void {

        const currentAction: Action = new Action( action.featurename, action.featurefloor, action.featureceil );
        this.created_actions.push( currentAction );
    
    }

    public delete_action( action: Action, index: number ): void {

        // deleting action
        this.created_actions.splice( index, index+1 );
    
    }

    
}