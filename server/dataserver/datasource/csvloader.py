import pandas as pd

# local imports
from ..config.constants import PATHCONSTS
from ..utils.histograms import HistogramGenerator

class CSVLoader:

    @staticmethod
    def load_dataframe( datasetName: str ) -> pd.DataFrame:

        ## defining the current dataset path
        currentDatasetPath: str = f'{ PATHCONSTS["DATASETSPATHCSV"].replace("DATASETNAME", datasetName) }'

        ## opening with pandas
        df = pd.read_csv(currentDatasetPath)

        return df

    @staticmethod
    def load_csv( datasetName: str, filters: list = [] ):

        ## defining the current dataset path
        currentDatasetPath: str = f'{ PATHCONSTS["DATASETSPATHCSV"].replace("DATASETNAME", datasetName) }'

        ## opening with pandas
        df = pd.read_csv(currentDatasetPath)
        filtereddf = df.copy(deep=True)

        ## filtering dataframe
        for constraint in filters:
            filtereddf = filtereddf[  (df[constraint['featureName']] >= constraint['featureFloor']) & (df[constraint['featureName']] <= constraint['featureCeil']) ]
        
        ##
        filtereddf = filtereddf.head(100)

        ## TODO: Remove it from here
        histograms = HistogramGenerator.create_histogram( df )

        ## removing row id from features
        return {'features': filtereddf.columns.values, 'rows': filtereddf.values, 'predictions': [0, 1, 0, 0, 0, 1 ,1], 'histograms': histograms }