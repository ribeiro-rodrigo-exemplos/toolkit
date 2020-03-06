import React, { useState } from 'react'

import { 
    Col, 
    Row, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap'

import SelectBoxProviders from '../../../components/SelectBoxProviders'
import CardFilter from '../../../components/CardFilter'
import ButtonsFilter from '../../../components/ButtonsFilter'

import BucketsViewModel from '../../../../viewModels/buckets/bucketsViewModel'

interface BucketsFilterProps{
    viewModel: BucketsViewModel
}

export default ({ viewModel }: BucketsFilterProps) => {

    const [name, setName] = useState("")
    const [provider, setProvider] = useState("")

    const onFindListener = (_: React.MouseEvent) => {
        viewModel.listBucketsByName(name)
    }
    
    const onCleanListener = (_: React.MouseEvent) => {
        setName("")
        setProvider("")
    }

    return (
        <CardFilter>
            <Row>
                <Col lg="3">
                    <FormGroup>
                        <Label htmlFor="nome">Nome</Label>
                        <Input 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" id="name"
                            value={name} 
                            placeholder="Digite o nome da bucket"/> 
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
