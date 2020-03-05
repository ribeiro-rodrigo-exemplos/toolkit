import AccountsRepository from '../models/repositories/accountsRepository'
import AccountsViewModel from '../viewModels/accounts/AccountsViewModel'

export type storeType = {
    provideAccountsRepository: () => AccountsRepository
    provideAccountsViewModel: () => AccountsViewModel
}

export const storeFactory: storeType = {
     provideAccountsRepository(){
        return new AccountsRepository()
    }, 
    
    provideAccountsViewModel(){
        return new AccountsViewModel(this.provideAccountsRepository()) 
    }
}