import { observable, action } from 'mobx'

import { machine } from '../../models/entities'
import MachineRepository from '../../models/repositories/machineRepository'

export default class MachineViewModel {
    
    @observable
    private _machines: machine[] = []

    constructor(private _machineRepository: MachineRepository){}

    get machines(): machine[]{
        return this._machines
    }

    @action
    public async listMachines(name: string): Promise<void> {
        this._machines = await this._machineRepository.listMachines() 
    }
}