import json
import glob

## local imports
from ..datasource.datasetloader import DatasetLoader

## serialization
from ..serialization.encoders import DatasetEncoder

class Engine:

    def __init__(self):
        pass

    def load_dataset( self, params ):
        return json.dumps(DatasetLoader.load_dataset(params['datasetname'], filters=params['filters']), cls=DatasetEncoder)

    def get_available_datasets( self ):
        return json.dumps(DatasetLoader.get_available_datasets())


