import { account } from '../entities'
import { trackPromise } from 'react-promise-tracker'

export default class AccountsRepository {

    private apiURL: string 

    constructor() {
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

