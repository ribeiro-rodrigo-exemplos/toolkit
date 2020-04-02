import React from 'react'
import { Observer } from 'mobx-react'

import {
    Card, 
    CardHeader, 
    CardBody, 
    Table, 
} from 'reactstrap'

import  BucketsViewModel  from '../../../../viewModels/buckets/bucketsViewModel'

interface BucketTableProps{
    viewModel: BucketsViewModel
}

const renderBody = (viewModel: BucketsViewModel) => (
    <tbody>
        {
            viewModel.buckets.map(
                (bucket, index) => (
                    <tr key={index}>
                        <td>{bucket.name}</td>
                        <td>{bucket.owner.name}</td>
                        <td>{bucket.owner.email}</td>
                        <td>{bucket.cloudProvider}</td>
                    </tr>
                )
            )
        }
    </tbody>
)

export default ( {viewModel }: BucketTableProps ) => (
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
                        <th>Email Dono</th>
                        <th>Cloud Provider</th>
                    </tr>
                </thead>
                <Observer>{() => renderBody(viewModel)}</Observer>
            </Table>
        </CardBody>
    </Card>
)