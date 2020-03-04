import React, { useEffect } from 'react'

import {
    Col, 
    Row, 
    Table, 
    Card, 
    CardHeader, 
    CardBody
} from 'reactstrap'

import { observer } from 'mobx-react'

import AccountsViewModel from '../../../viewModels/accounts/AccountsViewModel'

const accountsViewModel = new AccountsViewModel() 

export default observer(() => {

    useEffect(() => {
        accountsViewModel.listAllccounts() 
    })

    return (
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
                                    {
                                        accountsViewModel
                                                .accounts
                                                    .map((account, index) => (
                                                        <tr key={index}>
                                                            <td>{ account.name }</td>
                                                            <td>{ account.id }</td>
                                                            <td>{ account.email }</td>
                                                            <td>2222</td>
                                                        </tr>
                                                    ))
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
})