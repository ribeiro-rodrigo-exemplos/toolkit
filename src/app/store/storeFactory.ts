import AccountsRepository from '../models/repositories/accountsRepository'
import AccountsViewModel from '../viewModels/accounts/AccountsViewModel'
import BucketRepository from '../models/repositories/bucketRepository'
import BucketViewModel from '../viewModels/buckets/bucketsViewModel'

export type storeType = {
    provideAccountsRepository: () => AccountsRepository
    provideAccountsViewModel: () => AccountsViewModel
    provideBucketRepository: () => BucketRepository
    provideBucketViewModel: () => BucketViewModel
}

export const storeFactory: storeType = {
     provideAccountsRepository(){
        return new AccountsRepository()
    }, 
    
    provideAccountsViewModel(){
        return new AccountsViewModel(this.provideAccountsRepository()) 
    }, 

    provideBucketRepository(){
        return new BucketRepository() 
    }, 

    provideBucketViewModel(){
        return new BucketViewModel(this.provideBucketRepository())
    }
}