import React from 'react'

import {
    Col,
    Row,
    Table,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap'

import { Observer } from 'mobx-react'

import { storeType, useStore } from '../../../store/'
import AccountsViewModel from '../../../viewModels/accounts/AccountsViewModel'

const renderBodyTable = (accountsViewModel: AccountsViewModel) => (
    <tbody>
        {
            accountsViewModel
                .accounts
                .map((account, index) => (
                    <tr key={index}>
                        <td>{account.name}</td>
                        <td>{account.id}</td>
                        <td>{account.email}</td>
                        <td>2222</td>
                    </tr>
                ))
        }
    </tbody>
)


export default () => {

    const context: storeType = useStore()
    const accountsViewModel = context.provideAccountsViewModel()

    requestAnimationFrame(() => accountsViewModel.listAllccounts())

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
                                <Observer>
                                    {() => renderBodyTable(accountsViewModel)}
                                </Observer>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}