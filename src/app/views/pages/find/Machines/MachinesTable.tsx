import React from 'react'

import {
    Table, 
    Card, 
    CardHeader, 
    CardBody
} from 'reactstrap'

export default () => (
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
)