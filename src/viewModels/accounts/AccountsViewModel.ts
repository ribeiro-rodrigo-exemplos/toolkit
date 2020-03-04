import account from '../../models/entities/account'
import { observable, action } from 'mobx'

import AccountsRepository from '../../models/repositories/accountsRepository'


export default class AccountsViewModel{

    @observable
    private _accounts: account[]
    private _accountsRepository: AccountsRepository

    constructor(){
        this._accounts = []
        this._accountsRepository = new AccountsRepository() 
    }

    get accounts(): account[]{
        return this._accounts
    }

    @action
    public async listAllccounts(): Promise<void>{
        this._accounts = await this._accountsRepository.listAllAccounts() 
    }
    
}