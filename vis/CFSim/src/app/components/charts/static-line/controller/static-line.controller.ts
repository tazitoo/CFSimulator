import { ChartUtils } from "src/app/utils/charts/charts.utils";

import * as d3 from 'd3';

export class StaticLineController {
    
    // chart container
    public chartContainer!: HTMLElement;

    // svg
    public svg!: d3.Selection<any,any,any,any>;
    public group!: d3.Selection<any,any,any,any>;

    // scales
    public xScale!: d3.ScaleLinear<number, number>;
    public yScale!: d3.ScaleLinear<number, number>;

    // margins
    public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 30, left: 30, right: 30 };

    constructor(){}

    public render_chart( chartContainer: HTMLElement ): void {

        // initializing chart
        this.initialize_chart( chartContainer )

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

        const fakeData: any = [
            {x: 1, y: 10},
            {x: 2, y: 20},
            {x: 3, y: 30},
            {x: 4, y: 40},
            {x: 5, y: 90},
            {x: 6, y: 40},
            {x: 7, y: 30},
            {x: 8, y: 20},
            {x: 9, y: 10},
            {x: 10, y: 20},
            {x: 11, y: 30},
            {x: 12, y: 80},
            {x: 13, y: 50},
            {x: 14, y: 40},
            {x: 15, y: 30},
            {x: 16, y: 20}
        ]

        // updating axes
        this.xScale = ChartUtils.create_linear_scale( d3.extent( fakeData, (row: any) => row.x ), [0, this.chartContainer.clientWidth - this.margins.left - this.margins.right] );
        this.yScale = ChartUtils.create_linear_scale( d3.extent( fakeData, (row: any) => row.y ), [ 0, this.chartContainer.clientHeight - this.margins.top - this.margins.bottom ] );
        
        // Set the gradient
        this.group.append("linearGradient")
        .attr("id", "line-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0)
        .attr("y1", this.yScale(70))
        .attr("x2", 0)
        .attr("y2", this.yScale(0))
        .selectAll("stop")
        .data([
            {offset: "0%", color: "#a1d99b"},
            {offset: "100%", color: "#00441b"}
        ])
        .enter().append("stop")
        .attr("offset", function(d) { return d.offset; })
        .attr("stop-color", function(d) { return d.color; });

        const line: d3.Line<any> = d3.line()
            .x( (d: any) => this.xScale(d.x))
            .y( (d: any) => this.yScale(d.y))
            .curve(d3.curveCatmullRom.alpha(0.5));

        this.group.append('path')
              .attr('d', line(fakeData) )
              .attr('stroke-width', '2')
              .style('fill', 'none')
              .attr('stroke', 'url(#line-gradient)');

    }

}