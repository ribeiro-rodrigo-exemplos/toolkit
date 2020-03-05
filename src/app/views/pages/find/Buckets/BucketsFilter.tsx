import React from 'react'

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

export default () => (
    <CardFilter>
        <Row>
            <Col lg="3">
                <FormGroup>
                    <Label htmlFor="nome">Nome</Label>
                    <Input type="text" id="name" placeholder="Digite o nome da bucket"/> 
                </FormGroup>
            </Col>
            <Col lg="3">
                <SelectBoxProviders/> 
            </Col>
            <Col lg="3">
                <FormGroup>
                    <Label htmlFor="data-criacao">Data de Criação</Label>
                    <Input type="date" id="data-criacao"/> 
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col xs="6" lg="12">
                <ButtonsFilter/> 
            </Col>
        </Row>
    </CardFilter>
)