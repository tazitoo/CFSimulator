import { CounterfactualInstance } from "src/app/model/counterfactual-instance.model";

export class CounterfactualListController {

    
    // pagination parameters
    public currentPage: number = 0;
    public pageSize: number = 10;

    // visible cf instances
    public visibleCounterfactualList: CounterfactualInstance[] = [];
    public counterfactualList: CounterfactualInstance[] = [];

    constructor(){}

    public update_counterfactual_list( counterfactualList: CounterfactualInstance[] ): void {
        
        // updating counterfactual list
        this.counterfactualList = counterfactualList;

        // resetting the currentpage
        this.currentPage = 0;

        // setting visible instances
        this.visibleCounterfactualList = this.counterfactualList.slice(this.currentPage*this.pageSize, (this.currentPage+1)*this.pageSize)

    }

    public change_page( event: any ): void {

        // setting current page
        this.currentPage = event.pageIndex;

        // setting visible instances
        this.visibleCounterfactualList = this.counterfactualList.slice(this.currentPage*this.pageSize, (this.currentPage+1)*this.pageSize)

    }
}