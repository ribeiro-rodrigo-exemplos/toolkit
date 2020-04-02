import { bucket } from '../entities'
import { trackPromise } from 'react-promise-tracker'

export default class BucketRepository{

    private apiURL: string 

    constructor(){
        this.apiURL = `${process.env.REACT_APP_AWS_API_URL as string}/v1/buckets` 
    }

    public async findBucketByName(name: string): Promise<bucket[]>{

        const buckets = await trackPromise<bucket[]>(
            fetch(`${this.apiURL}/${name}`)
            .then(response => response.json())
            .then(bucket => bucket ? [bucket] : [])
        )

        return buckets
        
    }
}