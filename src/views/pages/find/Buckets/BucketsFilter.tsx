import React from 'react'

import { 
    Card, 
    CardHeader, 
    CardBody, 
    Col, 
    Row, 
    FormGroup, 
    Button, 
    Label, 
    Input 
} from 'reactstrap'

import SelectBoxProviders from '../../../components/SelectBoxProviders'

export default () => (
    <Card>
        <CardHeader>
            <i className="fa fa-search"></i> Filtros
        </CardHeader>
        <CardBody>
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
                    <Button color="secondary" className="float-right">Limpar</Button>
                    <Button color="primary" className="float-right horizontal-margin-right-5" >Buscar</Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
)