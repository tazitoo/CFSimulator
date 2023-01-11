import { ChartUtils } from "src/app/utils/charts/charts.utils";
import * as d3 from 'd3';

export class StaticScatterplotController {

    // chart container
    public chartContainer!: HTMLElement;

    // svg
    public svg!: d3.Selection<any,any,any,any>;
    public group!: d3.Selection<any,any,any,any>;
    public legendGroup!: d3.Selection<any,any,any,any>;

    // margins
    public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 150, left: 30, right: 30 };

    // scales
    public xScale!: d3.ScaleLinear<number, number>;
    public yScale!: d3.ScaleLinear<number, number>;
    public colorScale!: d3.ScaleSequential<number, string>;

    constructor(){}


    public render_chart( chartContainer: HTMLElement, data: {x: number, y: number, sparsity: number}[] ){

        // initializing chart
        if(!this.svg){
            this.intialize_chart( chartContainer );
        }

        // updating chart
        this.update_chart( data );

    }


    private intialize_chart( chartContainer: HTMLElement ): void {

        // saving container ref
        this.chartContainer = chartContainer;

        // creating basic elements
        this.svg = ChartUtils.create_svg( this.chartContainer );
        this.group = ChartUtils.create_group( this.svg, this.margins );
        this.legendGroup = ChartUtils.create_group(this.svg, {top: this.chartContainer.clientHeight + this.margins.top - this.margins.bottom, bottom: 0, left: this.margins.left, right: 0 })

    }

    private add_color_legend( colorScale: d3.ScaleSequential<number,string> ): void {

        // defining gradient
        const grad = this.legendGroup.append('defs')
            .append('linearGradient')
            .attr('id', 'grad')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');

        grad.selectAll('stop')
            .data(colorScale.range())
            .enter()
            .append('stop')
            .style('stop-color', function(d){ return d; })
            .attr('offset', function(d,i){
                return 100 * (i / (colorScale.range().length - 1)) + '%';
        })

        this.legendGroup
            .append('rect')
            .attr('x', 0   )
            .attr('y', this.margins.bottom / 2 )
            .attr('width', 150 )
            .attr('height', 30 )
            .style('fill', 'url(#grad)');

        this.legendGroup
            .append('text')
            .attr('x', 160 )
            .attr('y', 20 + this.margins.bottom / 2 )
            .text('Sparsity')


    }

    private update_chart( data: {x: number, y: number, sparsity: number}[] ): void {

        // updating scales
        this.xScale = ChartUtils.create_linear_scale( d3.extent( data , (element: {x: number, y: number, sparsity: number} ) => element.x ), [0, this.chartContainer.clientWidth - this.margins.left - this.margins.right] );
        this.yScale = ChartUtils.create_linear_scale( d3.extent( data , (element: {x: number, y: number, sparsity: number} ) => element.y ), [ 0, this.chartContainer.clientHeight - this.margins.top - this.margins.bottom ] );
        this.colorScale = ChartUtils.create_sequential_color_scale( d3.extent( data , (element: {x: number, y: number, sparsity: number} ) => element.sparsity ), ['#bdbdbd' ,'#636363'] );

        // adding legend
        this.add_color_legend( this.colorScale );

        // D3 NEW WAY OF DOING ENTER UPDATE EXIT
        this.group
        .selectAll('.cf-circle')
        .data( data )
        .join(
            enter => 
                enter
                .append('circle')
                .attr('cx', (row: {x: number, y: number, sparsity: number}, index: number) => this.xScale(row.x) )
                .attr('cy', (row: {x: number, y: number, sparsity: number}, index: number) => this.yScale(row.y) )
                .attr('r', 10)
                .attr('class', 'cf-circle')
                .attr('fill', (row: {x: number, y: number, sparsity: number}, index: number) => this.colorScale(row.sparsity) )
                .style('z-index', 5),
            update => 
                update
                .attr('cx', (row: {x: number, y: number, sparsity: number}, index: number) => this.xScale(row.x) )
                .attr('cy', (row: {x: number, y: number, sparsity: number}, index: number) => this.yScale(row.y) )
                .attr('fill', (row: {x: number, y: number, sparsity: number}, index: number) => this.colorScale(row.sparsity) )
            );


    }
}