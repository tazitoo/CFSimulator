import { environment } from "src/environments/environment";
import { DataFilter } from "../model/data-filter.model";
import { Serializer } from "../serialization/serializer";

export class DataAPI {

    public static async get_available_datasets(): Promise<{ 'datasets': string[] }> {

        // url
        const url = `${environment.dataserver}/getavailabledatasets`;

        // header
        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await fetch(url);
        return await response.json();

    }


    public static async get_dataset( datasetName: string, filters: DataFilter[] ): Promise<any> {

        // url
        const url = `${environment.dataserver}/loaddataset`;
        
        // post parameters
        const requestParams = Serializer.dataapi_get_dataset( filters, datasetName );

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

        // // header
        // const headers = {
        //     'Content-Type': 'application/json',
        // };

        // const response = await fetch(url);
        // return await response.json();

    }

}