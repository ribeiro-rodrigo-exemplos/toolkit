import account from '../../models/entities/account'
import { observable } from 'mobx'


class AccountsViewModel{

    @observable
    private _accounts: account[] = []

    get accounts(){
        return this._accounts
    }
    
}