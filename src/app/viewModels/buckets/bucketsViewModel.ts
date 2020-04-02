import { observable, action } from 'mobx'

import { bucket } from '../../models/entities'
import BucketRepository from '../../models/repositories/bucketRepository'

export default class BucketsViewModel{
    
    @observable
    private _buckets: bucket[] = []

    constructor(private _bucketRepository: BucketRepository){}

    get buckets(): bucket[]{
        return this._buckets
    }

    @action
    public async listBucketsByName(name: string): Promise<boolean> {
        this._buckets = await this._bucketRepository.findBucketByName(name) 
        return this._buckets.length > 0
    }
}