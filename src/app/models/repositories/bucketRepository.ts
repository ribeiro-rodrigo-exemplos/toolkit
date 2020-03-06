import { bucket, cloudProvider } from '../entities'

export default class BucketRepository{

    private buckets: bucket[]

    constructor(){
        this.buckets = [{ name: "bucket1", owner: {id:"12",name:"masteraccount",email:"conta@email.com"}, createDate:"12/03/2020", cloudProvider: cloudProvider.AMAZON } ]       
    }

    public findBucketByName(name: string): Promise<bucket[]>{
        return Promise.resolve(this.buckets)
    }
}