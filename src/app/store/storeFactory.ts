import AccountsRepository from '../models/repositories/accountsRepository'
import AccountsViewModel from '../viewModels/accounts/AccountsViewModel'
import BucketRepository from '../models/repositories/bucketRepository'
import BucketViewModel from '../viewModels/buckets/bucketsViewModel'
import MachineRepository from '../models/repositories/machineRepository'
import MachineViewModel from '../viewModels/machine/machineViewModel'

export type storeType = {
    provideAccountsRepository: () => AccountsRepository
    provideAccountsViewModel: () => AccountsViewModel
    provideBucketRepository: () => BucketRepository
    provideBucketViewModel: () => BucketViewModel
    provideMachineRepository: () => MachineRepository
    provideMachineViewModel:  () => MachineViewModel
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
    },

    provideMachineRepository(){
        return new MachineRepository() 
    }, 

    provideMachineViewModel(){
        return new MachineViewModel(this.provideMachineRepository())
    }
}