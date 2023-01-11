import json
import numpy as np

## model
from ..model.counterfactualinstance import CounterfactualInstance

class CounterfactualInstanceEnconder(json.JSONEncoder):

    def default(self, obj):

        if isinstance( obj, CounterfactualInstance ):
            return { 'featureInstances': obj.featureInstances, 'projectedX': obj.projectedX, 'projectedY': obj.projectedY, 'uid': obj.uid }

        return obj.__dict__