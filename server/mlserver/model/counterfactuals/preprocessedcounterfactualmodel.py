import json
import glob
import json

class PreprocessedCounterfactualModel:
    
    @staticmethod
    def get_counterfactuals( rowid):

        filepath = f'../data/counterfactuals/diabetes/{rowid}.json'

        with open(filepath, 'r') as f:
            return json.load(f)

      