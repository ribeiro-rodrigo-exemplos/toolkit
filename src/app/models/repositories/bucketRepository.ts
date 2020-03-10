import { bucket, cloudProvider } from '../entities'
import { trackPromise } from 'react-promise-tracker'

export default class BucketRepository{

    private buckets: bucket[]

    constructor(){
        this.buckets = [{ name: "bucket1", owner: {id:"12",name:"masteraccount",email:"conta@email.com"}, createDate:"12/03/2020", cloudProvider: cloudProvider.AMAZON } ]       
    }

    public findBucketByName(name: string): Promise<bucket[]>{
        return trackPromise<bucket[]>(
            new Promise(resolve => setTimeout(() => resolve(this.buckets), 4000) )
        )
    }
}