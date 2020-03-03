import React from 'react'

import { 
    Row, 
    Col, 
    FormGroup, 
    Input, 
    Label 
} from 'reactstrap'

import SelectBoxProviders from '../../../components/SelectBoxProviders'
import CardFilter from '../../../components/CardFilter'
import ButtonsFilter from '../../../components/ButtonsFilter'

export default () => (
    <CardFilter>
        <Row>
            <Col lg="3">
                <FormGroup>
                    <Label htmlFor="ip-publico">IP Público</Label>
                    <Input type="text" id="ip-publico" placeholder="Digite o IP público da máquina"/>
                </FormGroup>
            </Col>
            <Col lg="3">
                <FormGroup>
                    <Label htmlFor="ip-privado">IP Privado</Label>
                    <Input type="text" id="ip-privado" placeholder="Digite o IP privado da máquina"/>
                </FormGroup>
            </Col>
            <Col lg="3">
                <FormGroup>
                    <Label htmlFor="dns-publico">DNS Público</Label>
                    <Input type="text" id="dns-publico" placeholder="Digite o DNS da máquina"/>
                </FormGroup>
            </Col>
            <Col lg="3">
                <SelectBoxProviders/> 
            </Col>
        </Row>
        <Row>
            <Col xs="6" lg="12">
                <ButtonsFilter/> 
            </Col>
        </Row>
    </CardFilter>
)