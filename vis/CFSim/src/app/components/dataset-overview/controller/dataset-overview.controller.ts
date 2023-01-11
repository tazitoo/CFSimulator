import { EventEmitter } from "@angular/core";
import { DataState } from "src/app/state/data.state";

export class DatasetOverviewController {

    constructor( public datastate: DataState, public events:{ [eventname: string]: EventEmitter<any> } ){}

}