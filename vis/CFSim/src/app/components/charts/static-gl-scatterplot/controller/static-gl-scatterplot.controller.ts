import { EventEmitter } from '@angular/core';
import * as scatter from 'scatter-gl';
import * as _ from 'lodash';
import * as d3 from 'd3';

// import { PointColorer } from "scatter-gl/dist/scatter_gl";
import { ChartUtils } from 'src/app/utils/charts/charts.utils';
import { StaticGLScatterplotColorController } from './static-gl-scatterplot-color.controller';

export class StaticGlScatterplotController {

    // legend components
    public legendSVG!: d3.Selection<any,any,any,any>;

    // scales
    public colorScale!: d3.ScaleSequential<number, string>;

    // scatterGL references
    public scatterGL!: scatter.ScatterGL;
    public scatterDataset!: scatter.Dataset;

    // flags
    public brushActive: boolean = false;

    // metadata refs
    public uids: number[] = [];
    public indexedUIDS: { [uid: number]: number } = {};

    public events: { [eventname: string]: EventEmitter<any> } = {};

    constructor(){}

    public initialize_controller( events: { [eventname: string]: EventEmitter<any> } ){

        // saving events refs
        this.events = events;

    }

    public initialize_projection( container: HTMLElement, legendContainer: HTMLElement, datapoints: number[][], uids: number[], sparsity: number[] ){

        // saving metadata refs
        this.uids = uids;
        uids.forEach( (uid: number, index: number) => {
            this.indexedUIDS[uid] = index;
        });


        // calculating scales
        this.create_scales( sparsity );
       
        // initialize legend
        this.initialize_legend( legendContainer );

        this.generate_dataset( datapoints );
        this.generate_projection( container );
        this.render_projection();


        // setting point colorer
        this.scatterGL.setPointColorer( StaticGLScatterplotColorController.get_sparsity_colorer( this.colorScale, sparsity ) );
    }

    public set_brush_mode(): void {

        // changing brush
        this.brushActive = !this.brushActive;

        if(this.brushActive){ this.scatterGL.setSelectMode(); }
        else{ this.scatterGL.setPanMode(); }
    }

    public select_points( uids: number[] ): void {

        const selectedIndices: number[] = [];
        uids.forEach( (uid: number) => {
            selectedIndices.push(this.indexedUIDS[uid]);  
        });

        this.scatterGL.select( selectedIndices );

    }

    // private methods 
    private render_projection(): void {
        this.scatterGL.render( this.scatterDataset );
    }

    private generate_projection( container: HTMLElement ): void{

        this.scatterGL = new scatter.ScatterGL( container, {
            onSelect: (points: number[]) => {
                this.selection_handler( points );
            },
            // onClick: (point: number | null ) => {
            //     // this.click_handler( point );
            // },
            orbitControls: {
                    zoomSpeed: 1.125,
            }});
        
    }

    private initialize_legend( container: HTMLElement ): void {

        const colorScale: string[] = ['#bdbdbd' ,'#636363'];

        // creating svg
        this.legendSVG = ChartUtils.create_svg( container );

        // defining gradient
        const grad = this.legendSVG.append('defs')
            .append('linearGradient')
            .attr('id', 'grad')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');

        grad.selectAll('stop')
            .data(colorScale)
            .enter()
            .append('stop')
            .style('stop-color', function(d){ return d; })
            .attr('offset', function(d,i){
                return 100 * (i / (colorScale.length - 1)) + '%';
        })

        this.legendSVG
            .append('rect')
            .attr('x', 20 )
            .attr('y', (container.clientHeight / 2) - 15  )
            .attr('width', 150 )
            .attr('height', 30 )
            .style('fill', 'url(#grad)');

        this.legendSVG
            .append('text')
            .attr('x', 180 )
            .attr('y', (container.clientHeight / 2) )
            .attr('alignment-baseline', 'mathematical')
            .text('Sparsity')

    }

    private generate_dataset( datapoints: any[] ): void {

        // creating scatter dataset
        this.scatterDataset = new scatter.ScatterGL.Dataset(datapoints);

    }

    private create_scales( datapoints: number[] ): void {

        // creating color scale
        this.colorScale = ChartUtils.create_sequential_color_scale( d3.extent( datapoints ), ['#bdbdbd' ,'#636363'] );

    }

    // event handlers
    private selection_handler( points: any ): void {

        // array of selected frames
        const selectedUIDs: number[] = [];

        _.forEach( points, (pointindex: any) => {
            selectedUIDs.push(this.uids[pointindex]);
        });
        
        // emitting event
        this.events['onpointsselected'].emit({ 'uids': selectedUIDs });

    }


}