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
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input type="text" id="name" placeholder="Digite o nome da bucket"/> 
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
            </Col>
        </Row>
        <Row>
            <Col xs="6" lg="12">
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Buckets Filtrados
                    </CardHeader>
                    <CardBody>
                        <Table responsive bordered striped hover size="sm">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Dono</th>
                                    <th>Data de Criação</th>
                                    <th>Cloud Provider</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bucket 1</td>
                                    <td>masteraccount</td>
                                    <td>23/02/2019</td>
                                    <td>Amazon Webservices</td>
                                </tr>
                                <tr>
                                    <td>Bucket 2</td>
                                    <td>masteraccount</td>
                                    <td>19/02/2019</td>
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