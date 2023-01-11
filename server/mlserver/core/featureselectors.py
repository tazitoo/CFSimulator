## outside package imports
import glob
from dataserver.datasource.datasetloader import DatasetLoader
from mlserver.featureselection.cmi_featureselection import CMIFeatureSelection

class FeatureSelectors:

    @staticmethod
    def select_next_features( datasetname: str, constraints: list ):

        dataframe = DatasetLoader.load_dataframe( 'diabetes' )

        return CMIFeatureSelection.select_topk_features( 3, dataframe, constraints )
        