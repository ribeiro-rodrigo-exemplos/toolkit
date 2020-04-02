import React, { useState } from 'react'

import { 
    Row, 
    Col, 
    FormGroup, 
    Input, 
    Label 
} from 'reactstrap'

import { toast } from 'react-toastify'

import SelectBoxProviders from '../../../components/SelectBoxProviders'
import CardFilter from '../../../components/CardFilter'
import ButtonsFilter from '../../../components/ButtonsFilter'

import MachineViewModel from '../../../../viewModels/machine/machineViewModel'

interface MachineFilterProps{
    viewModel: MachineViewModel
}

export default ({ viewModel }: MachineFilterProps) => {
    const defaultProvider = "all"

    const [publicIp, setPublicIp] = useState("")
    const [provider, setProvider] = useState(defaultProvider)

    const onFindListener = async (_: React.MouseEvent) => {
        try{
            const found = await viewModel.listMachines(publicIp)
            if(found)
                toast.info("Máquina encontrada!!!")
            else
                toast.warn("Máquina não encontrada")
        }catch(e){
            toast.error("Erro ao buscar a máquina.")
        } 
    }
    
    const onCleanListener = (_: React.MouseEvent) => {
        setPublicIp("")
        setProvider(defaultProvider)
    }

    return (
        <CardFilter>
            <Row>
                <Col lg="3">
                    <FormGroup>
                        <Label htmlFor="publicIp">Ip Público</Label>
                        <Input 
                            onChange={(e) => setPublicIp(e.target.value)} 
                            type="text" id="publicIp"
                            value={publicIp} 
                            placeholder="Digite o ip público"/> 
                    </FormGroup>
                </Col>
                <Col lg="3">
                    <SelectBoxProviders 
                        selectListener={(e: React.ChangeEvent<HTMLInputElement>) => setProvider(e.target.value)}
                        defaultValue={provider}
                    /> 
                </Col>
            </Row>
            <Row>
                <Col xs="6" lg="12">
                    <ButtonsFilter 
                        findClickListener={onFindListener}
                        cleanClickListener={onCleanListener}/> 
                </Col>
            </Row>
        </CardFilter>
    )

}