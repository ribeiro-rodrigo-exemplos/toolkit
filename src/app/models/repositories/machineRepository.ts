import { machine, cloudProvider } from '../entities'

export default class MachineRepository {

    private machines: machine[]

    constructor() {
        this.machines =  [{ publicIp: "192.0.0.1", privateIp:"10.0.0.1", publicDns:"abc.globoi.com", owner: {id:"12",name:"masteraccount",email:"conta@email.com"}, cloudProvider: cloudProvider.AMAZON } ]
    }

    public listMachines(): Promise<machine[]> {
        return Promise.resolve(this.machines)
    }
}