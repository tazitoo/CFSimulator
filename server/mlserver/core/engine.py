import json
import glob

## local imports
from .counterfactualpredictor import CounterfactualPredictor
from .featureselectors import FeatureSelectors

## serialization
from ..serialization.encoders import CounterfactualInstanceEnconder

## projections
from ..projections.projector import Projector

class Engine:

    def __init__(self):
        
        ## counterfactual predictor
        self.counterfactualPredictor = CounterfactualPredictor()


    ## counterfactual generation
    def generate_counterfactual_set( self, params ):

        # cfs = self.counterfactualPredictor.get_counterfactual_set( queryinstance=params['queryinstance'], parameters=params['parameters'], constraints=params['constraints'] )
        cfs = self.counterfactualPredictor.get_preprocessed_counterfactual_set( rowid=params['rowid'])

        ## getting cfs feature vectors
        if( len(cfs['counterfactuals']) > 0 ):
            featureVectors = list( map( lambda cfinstance: cfinstance.get_instance_feature_vector(), cfs['counterfactuals'] ) )
            projectedVectors = Projector.project_points( featureVectors, 'UMAP')

            for index, cf in enumerate(cfs['counterfactuals']):
                cfs['counterfactuals'][index].update_projected_coords( projectedVectors[index][0], projectedVectors[index][1] )

        return json.dumps( cfs, cls=CounterfactualInstanceEnconder )


    ## feature selection
    def generate_suggested_features( self, params ):
        return json.dumps( FeatureSelectors.select_next_features( 'diabetes', params['constraints'] ) )