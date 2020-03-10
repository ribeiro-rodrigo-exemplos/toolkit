import { account } from '../../models/entities'
import { observable, action } from 'mobx'

import AccountsRepository from '../../models/repositories/accountsRepository'


export default class AccountsViewModel {

    @observable
    private _accounts: account[] = []

    constructor(private _accountsRepository: AccountsRepository) { }

    get accounts(): account[] {
        return this._accounts
    }

    @action
    public async listAllccounts(): Promise<account[]> {
        this._accounts = await this._accountsRepository.listAllAccounts()
        return this._accounts
    }
}