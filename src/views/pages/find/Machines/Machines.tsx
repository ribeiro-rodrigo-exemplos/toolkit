import React from 'react'

import { 
    Row, 
    Col, 
    Card, 
    CardHeader, 
    CardBody, 
    Table, 
    FormGroup, 
    Label, 
    Input, 
    Button 
} from 'reactstrap'

export default () => (
    <div className="animated fadeIn">
        <Row>
            <Col xs="6" lg="12">
                <Card>
                    <CardHeader>
                        <i className="fa fa-search"></i> Filtros
                    </CardHeader>
                    <CardBody>
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
                                <FormGroup>
                                    <Label htmlFor="provider">Cloud Provider</Label>
                                    <Input type="select" id="provider">
                                        <option value="all">Todos</option>
                                        <option value="aws">Amazon Webservices</option>
                                        <option value="gcp">Google Cloud</option>
                                        <option value="azure">Azure</option>
                                    </Input>
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
            </Col>
        </Row>
        <Row>
            <Col xs="6" lg="12">
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Máquinas Filtradas
                    </CardHeader>
                    <CardBody>
                        <Table bordered striped hover size="md">
                            <thead>
                                <tr>
                                    <th>IP Público</th>
                                    <th>IP Privado</th>
                                    <th>DNS Público</th>
                                    <th>Dono</th>
                                    <th>Cloud Provider</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>34.0.3.12</td>
                                    <td>10.3.34.3</td>
                                    <td>maquina.com</td>
                                    <td>accountmster</td>
                                    <td>Amazon Webservices</td>
                                </tr>
                                <tr>
                                    <td>34.0.3.12</td>
                                    <td>10.3.34.3</td>
                                    <td>maquina.com</td>
                                    <td>accountmster</td>
                                    <td>Amazon Webservices</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
)