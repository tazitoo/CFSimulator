import { EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { HistogramData } from 'src/app/model/types';
import { ChartUtils } from 'src/app/utils/charts/charts.utils';

export class SelectorHistogramController {

    // event emitters
    public customEvents: { [eventname: string]: EventEmitter<any> } = {};

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
    public minHeight: number = 5;

    // brush
    public brush!: any;
    public brushSelection: number[] = [];
    public dataBrushSelection: number[] = [];

    // current histogram Data
    public histogramData: HistogramData[] = [];

    // margins
    public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 30, left: 30, right: 30 };

    constructor(){}

    public initialize_controller( events: { [eventname: string]: EventEmitter<any> } ): void {
        this.customEvents = events;
    }

    public render_chart( chartContainer: HTMLElement, histData: HistogramData[] ): void {

        // initializing chart
        if(!this.svg){
            this.initialize_chart( chartContainer );
        }
        
        // update brush
        this.create_brush();

        // rendering chart
        this.histogramData = histData;
        this.update_chart();
    }

    private create_brush(): void {

        // clearing previous selections
        this.brushSelection = [];
        this.dataBrushSelection = [];

        // creating brush
        this.group.select('.brush').remove();
        this.brush = ChartUtils.create_horizontal_brush( this.group, this.margins, this.chartContainer );
        this.brush.on('brush', (brushEvent: any) => this.brush_move(brushEvent) );
        this.brush.on('end', (brushEvent: any) => this.brush_end(brushEvent) );

    }

    private update_chart(): void {

        // transitions
        const t = this.svg.transition().duration(50);

        // updating axes
        this.xScale = ChartUtils.create_linear_scale( [0, this.histogramData.length], [0, this.chartContainer.clientWidth - this.margins.left - this.margins.right] );
        this.yScale = ChartUtils.create_linear_scale( d3.extent( this.histogramData, (row: HistogramData) => row.value ), [ this.minHeight, this.chartContainer.clientHeight - this.margins.top - this.margins.bottom ] );
        
        // default dimensions
        const barWidth: number = this.xScale(1) - this.xScale(0);
        const baseHeight: number = this.chartContainer.clientHeight - this.margins.top - this.margins.bottom;

        // D3 NEW WAY OF DOING ENTER UPDATE EXIT
        this.group
        .selectAll('.hist-bar')
        .data( this.histogramData )
        .join(
            enter => 
                enter
                .append('rect')
                .attr('x', (row: HistogramData, index: number) => this.xScale(index)   )
                .attr('y', (row: HistogramData, index: number) => baseHeight - this.yScale(row.value) )
                .attr('rx', 4)
                .attr('ry', 4)
                .attr('width', barWidth - this.pad/2 )
                .attr('height', (row: HistogramData, index: number) => this.yScale(row.value) )
                .attr('class', 'hist-bar')
                .attr('fill', (row: HistogramData, index: number) => {
                    if( index >= this.brushSelection[0] && index <= this.brushSelection[1] ) return '#294B93';
                    return '#9B9B9B';
                } )
                .style('z-index', 5),
            update =>
                update.transition(t) 
                    .attr('x', (row: HistogramData, index: number) => this.xScale(index)   )
                    .attr('y', (row: HistogramData, index: number) => baseHeight - this.yScale(row.value) )
                    .attr('width', barWidth - this.pad/2 )
                    .attr('height', (row: HistogramData, index: number) => this.yScale(row.value) )
                    .attr('fill', (row: HistogramData, index: number) => {
                        if( index >= this.brushSelection[0] && index <= this.brushSelection[1] ) return '#294B93';
                        return '#9B9B9B';
                    } ),
            exit => 
                exit.remove()
        );

    }

    private initialize_chart( chartContainer: HTMLElement ): void {

        // saving container ref
        this.chartContainer = chartContainer;

        // creating basic elements
        this.svg = ChartUtils.create_svg( this.chartContainer );
        this.group = ChartUtils.create_group( this.svg, this.margins );

    }

    private brush_move(brushEvent: any): void {

        // saving brush selection
        this.brushSelection = [ this.xScale.invert(brushEvent.selection[0]), this.xScale.invert(brushEvent.selection[1]) ];

        // saving data brush selection
        const dataFloor: number = this.histogramData[Math.round(this.brushSelection[0])].start;
        const dataCeil: number = this.histogramData[Math.round(this.brushSelection[1])].end;
        this.dataBrushSelection = [ dataFloor, dataCeil ];

        // updating chart
        this.update_chart();

    }

    private brush_end( brushEvent: any ): void {

        // firing brush event to parent
        this.customEvents['onbrushend'].emit({'selection': this.dataBrushSelection});
    }
    

}