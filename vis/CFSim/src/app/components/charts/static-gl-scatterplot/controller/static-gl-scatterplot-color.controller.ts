import { PointColorer } from 'scatter-gl/dist/scatter_gl';

export class StaticGLScatterplotColorController {


    public static get_sparsity_colorer( colorScale: any, sparsityList: number[] ): PointColorer {
        return (i, selectedIndices: Set<number>, hoverIndex) => { 

            if( selectedIndices.size == 0 ){
                return colorScale( sparsityList[i] );
            } 

            if( !selectedIndices.has(i) ){
                return '#f0f0f0'
            }

            return colorScale( sparsityList[i] );   
        }
    }

}