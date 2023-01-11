# libs
import pandas as pd
import glob
import os

# local imports
from .csvloader import CSVLoader
from ..config.constants import PATHCONSTS

class DatasetLoader:

    @staticmethod
    def load_dataset( datasetName: str, filters: list = [] ):
        return CSVLoader.load_csv( datasetName, filters )

    @staticmethod
    def load_dataframe( datasetName: str ):
        return CSVLoader.load_dataframe( datasetName )

    @staticmethod
    def get_available_datasets():

        availableDatasets = glob.glob(f'{PATHCONSTS["DATASETSFOLDER"]}/*')
        availableDatasets = list( map( lambda filename: os.path.basename(filename).split('.')[0], availableDatasets ))

        return { 'datasets': availableDatasets }     
     