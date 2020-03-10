import { account } from '../entities'
import { trackPromise } from 'react-promise-tracker'

export default class AccountsRepository {

    private accounts: account[]
    private apiURL: string 

    constructor() {
        // mock de teste
        this.accounts = [
            { id: "454595351813", name: "Rodrigo Testr", email: "rodrigo.senfio1989@gmail.com" },
            { id: "193348742955", name: "rodrigoribeiro", email: "ribeiro.rodrigo1989@gmail.com" },
            { id: "379139915982", name: "rodrigomarcia", email: "rodrigo.m2msolutions@gmail.com" }
        ]

        this.apiURL = `${process.env.REACT_APP_AWS_API_URL as string}/v1/organizations` 
    }

    public async listAllAccounts(): Promise<account[]> {        
        const accounts = await trackPromise<account[]>(
            fetch(this.apiURL)
            .then(response => response.status === 200 ? response.json() : [])
        )
        return accounts
    }
}

