import pandas as pd
import numpy as np
from typing import Dict

class HistogramGenerator:


    @staticmethod
    def create_histogram( dataframe: pd.DataFrame ) -> Dict[ str, list ]:

        columns = dataframe.columns
        histograms = {}
        for index, featureName in enumerate(columns):

            currentHistogram = np.histogram(dataframe.values[:,index], bins=20)
            parsedHistogram = []
            histogramLimits = currentHistogram[1].tolist()
            histogramHeights = currentHistogram[0].tolist()
            
            for index, value in enumerate(histogramHeights):

                currentRow = {
                    'start': histogramLimits[index],
                    'end': histogramLimits[index+1],
                    'value': value
                }

                parsedHistogram.append(currentRow)

            histograms[featureName] = parsedHistogram

        return histograms


    @staticmethod
    def load_histogram():
        
        ## TODO: this will be useful to load precomputed histograms when dealing with larger datasets
        pass