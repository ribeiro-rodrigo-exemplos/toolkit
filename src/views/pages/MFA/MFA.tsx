import React from 'react'

import {
    Col, 
    Row, 
    Table, 
    Card, 
    CardHeader, 
    CardBody
} from 'reactstrap'

export default () => (
    <div className="animated fadeIn">
        <Row>
            <Col xs="6" lg="12">
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i>Lista de MFAs
                    </CardHeader>
                    <CardBody>
                        <Table hover bordered striped size="md">
                            <thead>
                                <tr>
                                    <th>Conta</th>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>MFA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
)