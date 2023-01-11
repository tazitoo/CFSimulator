import umap
import numpy as np

class Projector:


    @staticmethod
    def project_points( points: list, algorithm: str ):

        ## transforming list of points into numpy
        embeddings = np.array(points, dtype=np.float32)
        
        ## projecting
        umap_projection = umap.UMAP(random_state=42).fit_transform(embeddings)

        return umap_projection.tolist()