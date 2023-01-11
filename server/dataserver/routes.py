## flask imports
from flask import Blueprint, request

## local imports
from .core.engine import Engine

## creating blueprint
dataserverbp = Blueprint('dataserver', __name__, url_prefix='/dataserver' )

## creating engine
engine = Engine()

@dataserverbp.route('/loaddataset', methods=['POST'])
def load_dataset():

    ## reading parameters
    requestParams = request.get_json()

    return engine.load_dataset(requestParams)

@dataserverbp.route('/getavailabledatasets', methods=['GET'])
def get_available_datasets():

    return engine.get_available_datasets()

@dataserverbp.before_app_first_request
def init_server_module():
    engine = Engine()
