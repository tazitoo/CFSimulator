## flask imports
from flask import Blueprint, request

## local imports
from .core.engine import Engine

## creating blueprint
mlserverbp = Blueprint('mlserver', __name__, url_prefix='/mlserver' )

## creating engine
engine = Engine()

@mlserverbp.route('/generatecounterfactualset', methods=['POST'])
def generate_counterfactual_set():

    ## reading parameters
    requestParams = request.get_json()

    return engine.generate_counterfactual_set( requestParams )


@mlserverbp.route('/generatesuggestedfeatures', methods=['POST'])
def generate_suggested_features():

    ## reading parameters
    requestParams = request.get_json()

    return engine.generate_suggested_features( requestParams )

@mlserverbp.before_app_first_request
def init_server_module():
    engine = Engine()
