import React from 'react'

import {
    Card, 
    CardHeader, 
    CardBody, 
    Table, 
} from 'reactstrap'

export default () => (
    <Card>
        <CardHeader>
            <i className="fa fa-align-justify"></i> Buckets Filtrados
        </CardHeader>
        <CardBody>
            <Table responsive bordered striped hover size="md">
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
                    <tr>
                        <td>Bucket 3</td>
                        <td>masteraccount</td>
                        <td>19/02/2019</td>
                        <td>Amazon Webservices</td>
                    </tr>
                </tbody>
            </Table>
        </CardBody>
    </Card>
)