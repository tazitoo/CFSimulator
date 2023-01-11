import { ChartUtils } from "src/app/utils/charts/charts.utils";

import * as d3 from 'd3';
import { update } from "lodash";


export class StaticBarplotController {

        // chart container
        public chartContainer!: HTMLElement;

        // svg
        public svg!: d3.Selection<any,any,any,any>;
        public group!: d3.Selection<any,any,any,any>;
    
        // scales
        public xScale!: d3.ScaleLinear<number, number>;
        public yScale!: d3.ScaleLinear<number, number>;
    
        // constants
        public pad: number = 2;
        // public minHeight: number = 5;
    
        // current histogram Data
        public plotData: { 'classname': string, 'value': number }[] = [];
    
        // margins
        public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 30, left: 30, right: 30 };
    
        constructor(){}   
    
    
        public render_chart( chartContainer: HTMLElement, plotData: { 'classname': string, 'value': number }[] ): void {
    
            // initializing chart
            if(!this.svg)
                this.initialize_chart( chartContainer );
            
            // plot data
            this.plotData = plotData;

            // // rendering chart
            this.update_chart( );
    
        }
    
        private initialize_chart( chartContainer: HTMLElement ): void {
    
            // saving container ref
            this.chartContainer = chartContainer;
    
            // creating basic elements
            this.svg = ChartUtils.create_svg( this.chartContainer );
            this.group = ChartUtils.create_group( this.svg, this.margins );
    
        }
    
        private update_chart(): void {
    
            // // transitions
            const t = this.svg.transition().duration(100);
    
            // // updating axes
            this.yScale = ChartUtils.create_linear_scale( d3.extent( this.plotData, (row: { 'classname': string, 'value': number }) => row.value ), [ 0, this.chartContainer.clientHeight - this.margins.top - this.margins.bottom ] )
            this.xScale = ChartUtils.create_linear_scale( [0, this.plotData.length], [0, this.chartContainer.clientWidth - this.margins.left - this.margins.right] );
            
            // // default dimensions
            const barWidth: number = this.xScale(1) - this.xScale(0);
            const baseHeight: number = this.chartContainer.clientHeight - this.margins.top - this.margins.bottom;
    
            // D3 NEW WAY OF DOING ENTER UPDATE EXIT
            this.group
            .selectAll('.bar')
            .data( this.plotData )
            .join(
                enter => 
                    enter
                    .append('rect')
                    .attr('x', ( row: { 'classname': string, 'value': number }, index: number ) => this.xScale( index ))
                    .attr('y', ( row: { 'classname': string, 'value': number } ) => this.yScale(row.value) )
                    .attr('rx', 4)
                    .attr('ry', 4)
                    .attr('width', barWidth - this.pad/2 )
                    .attr('height', ( row: { 'classname': string, 'value': number }) => baseHeight - this.yScale(row.value) )
                    .attr('class', 'bar')
                    .attr('fill', '#9B9B9B')
                    .style('z-index', 5),
                update => 
                    update.transition(t)
                    .attr('x', ( row: { 'classname': string, 'value': number }, index: number ) => this.xScale( index ))
                    .attr('y', ( row: { 'classname': string, 'value': number } ) => this.yScale(row.value) )
                    .attr('width', barWidth - this.pad/2 )
                    .attr('height', ( row: { 'classname': string, 'value': number }) => baseHeight - this.yScale(row.value) )
            );
    
        }

    
}