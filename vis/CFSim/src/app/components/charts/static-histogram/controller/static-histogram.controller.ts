import { HistogramData } from "src/app/model/types";
import { ChartUtils } from "src/app/utils/charts/charts.utils";

import * as d3 from 'd3';

export class StaticHistogramController {

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

    // current histogram Data
    public histogramData: HistogramData[] = [];
    public rangeSelection!: number[];
    public displacement!: number[];

    // margins
    public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 30, left: 30, right: 30 };

    constructor(){}   

    public get_displacement_string(): string{
        return `from ${this.displacement[0]} to ${this.displacement[1]}`
    }

    public render_chart( chartContainer: HTMLElement, histData: HistogramData[], rangeSelection: number[], displacement: number[] ): void {

        // initializing chart
        this.initialize_chart( chartContainer );

        // rendering chart
        this.histogramData = histData;
        this.rangeSelection = rangeSelection;
        this.displacement = displacement;
        this.update_chart();

    }

    private initialize_chart( chartContainer: HTMLElement ): void {

        // saving container ref
        this.chartContainer = chartContainer;

        // creating basic elements
        this.svg = ChartUtils.create_svg( this.chartContainer );
        this.group = ChartUtils.create_group( this.svg, this.margins );

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

                    if( this.displacement ){
                        if( this.displacement[0] >= row.start && this.displacement[0] <= row.end ) return '#294B93';
                        if( this.displacement[1] >= row.start && this.displacement[1] <= row.end ) return '#ef8a62'
                    } else {
                        if( !this.rangeSelection ) return '#9B9B9B';
                        if(  row.start >= this.rangeSelection[0] && row.end <= this.rangeSelection[1] ) return '#294B93'   
                    }
                    return  '#9B9B9B';

                    
                })
                .style('z-index', 5)
        );

    }

}