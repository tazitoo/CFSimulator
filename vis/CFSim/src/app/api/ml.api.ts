import { environment } from 'src/environments/environment';
import { Action } from '../model/action.model';
import { Serializer } from '../serialization/serializer';

export class MLAPI {

    public static async get_counterfactual_set( queryInstance: any, rowid: number, parameters: any, constraints: any ): Promise< {counterfactuals: any} > {

        // url
        const url = `${environment.mlserver}/generatecounterfactualset`;

        // post parameters
        const requestParams = { 'queryinstance': queryInstance, 'rowid': rowid, parameters, constraints  } ;

        // post header
        const headers = {
            'Content-Type': 'application/json',
        };

        // Return a new promise.
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestParams),
        });

        return await response.json();


    }

    public static async get_suggested_features( actions: Action[] ): Promise<any> {


        // url
        const url = `${environment.mlserver}/generatesuggestedfeatures`;
       
        // post parameters
        const requestParams = { 'constraints': Serializer.mlapi_update_feature_suggestions(actions) };

        // post header
        const headers = {
            'Content-Type': 'application/json',
        };

        // Return a new promise.
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestParams),
        });

        return await response.json();

    }


}