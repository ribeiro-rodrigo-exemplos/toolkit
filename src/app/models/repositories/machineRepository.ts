import { machine } from '../entities'
import { trackPromise } from 'react-promise-tracker'

export default class MachineRepository {

    private apiURL: string 

    constructor(){
        this.apiURL = `${process.env.REACT_APP_AWS_API_URL as string}/v1/ec2/` 
    }

    public async listMachines(ipAdress: string): Promise<machine[]> {

        const machines = await trackPromise<machine[]>(
            fetch(`${this.apiURL}?ip-address=${ipAdress}`)
            .then(response => response.status === 200 ? response.json() : [])
        )

        return machines
    }
}