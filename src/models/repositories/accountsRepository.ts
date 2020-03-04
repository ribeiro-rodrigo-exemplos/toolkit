import account from '../entities/account'

export default class AccountsRepository{
   
    private accounts: account[]

    constructor(){
        // mock de teste
        this.accounts = [
            { id: "454595351813", name:"Rodrigo Testr", email:"rodrigo.senfio1989@gmail.com" }, 
            { id: "193348742955", name:"rodrigoribeiro", email:"ribeiro.rodrigo1989@gmail.com" }, 
            { id: "379139915982", name:"rodrigomarcia", email:"rodrigo.m2msolutions@gmail.com" }
        ]
    }

    public listAllAccounts(): Promise<account[]>{
        return Promise.resolve(this.accounts)
    }
}

