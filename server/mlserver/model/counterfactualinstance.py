class CounterfactualInstance:


    def __init__( self, featureInstances: list, uid: int):

        self.featureInstances = featureInstances
        
        ## cf projection coords
        self.projectedX = 0
        self.projectedY = 0

        ## counterfactual id
        self.uid = uid


    def get_instance_feature_vector( self ):

        featureVector = []
        for featureInstance in self.featureInstances:
            featureVector.append(featureInstance.newValue)

        return featureVector

    def update_projected_coords( self, x, y):

        self.projectedX = x
        self.projectedY = y

