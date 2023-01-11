class CounterfactualFeatureInstance:


    def __init__( self, featureName, oldValue, newValue ):

        # print( '[', round(oldValue, 5), ' - ', round(newValue, 5), ']',  ' -> ', '[',oldValue, ' - ', newValue,  ']')


        self.featureName = featureName
        # self.oldValue = oldValue
        # self.newValue = newValue

        self.oldValue = round(oldValue, 5)
        self.newValue = round(newValue, 5)

        self.variation = round(newValue, 4) - round(oldValue, 4)