# from core.engine import Engine
from flask import Flask, request
from flask_cors import CORS ## remove in production

## routes refs
from dataserver.routes import dataserverbp
from mlserver.routes import mlserverbp

app = Flask(__name__)
cors = CORS(app) ## remove in production
app.config['CORS_HEADERS'] = 'Content-Type' ## remove in production

if __name__ == '__main__':

    ## registering blueprints
    app.register_blueprint( dataserverbp )
    app.register_blueprint( mlserverbp )

    ## Starting Server
    print('Server is online...')
    app.run(host='0.0.0.0', port=5000, debug=True)
