import React, { createContext } from 'react'

import AccountsRepository from '../models/repositories/accountsRepository'
import AccountsViewModel from '../viewModels/accounts/AccountsViewModel'

export type Store = {
    provideAccountsRepository: () => AccountsRepository
    provideAccountsViewModel: () => AccountsViewModel
}

const store: Store = {
     provideAccountsRepository(){
        return new AccountsRepository()
    }, 
    
    provideAccountsViewModel(){
        return new AccountsViewModel(this.provideAccountsRepository()) 
    }
}

export const AppContext = createContext(store)

type AppContextType = {
    children: React.ReactNode
}

export default ({ children }: AppContextType) => (
    <AppContext.Provider value={store}>
        { children }
    </AppContext.Provider>
)