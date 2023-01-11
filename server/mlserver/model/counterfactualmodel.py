import json

class CounterfactualModel:

    def __init__(self, id, model):

        self.id = id
        self.model = model


    def get_counterfactuals(self, queryInput, samplesize=10, constraints={}, features_to_vary=[]):

        if( len(features_to_vary) > 0 ):

            try:
                cfs = self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite", features_to_vary=features_to_vary )
                return json.loads(cfs.to_json())
            except:
                return { 'test_data': [[[]]], 'cfs_list': [[]], 'feature_names': [] }

        else:
            cfs = self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite")
            print(cfs.to_json())
            return json.loads(cfs.to_json())


            # return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite")

        #     return self.model.generate_counterfactuals(queryInput, total_CFs=samplesize, desired_class="opposite", features_to_vary=features_to_vary )
        # 
