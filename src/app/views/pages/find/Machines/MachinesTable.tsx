import { Observer } from 'mobx-react'
import React from 'react'

import {
    Table,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap'

import MachineViewModel from '../../../../viewModels/machine/machineViewModel'

interface MachineTableProps {
    viewModel: MachineViewModel
}

const renderBody = (viewModel: MachineViewModel) => (
    <tbody>
        {
            viewModel.machines.map(
                (machine, index) => (
                    <tr key={index}>
                        <td>{machine.publicIp}</td>
                        <td>{machine.privateIp}</td>
                        <td>{machine.publicDns}</td>
                        <td>{machine.owner.name}</td>
                        <td>{machine.cloudProvider}</td>
                    </tr>
                )
            )
        }
    </tbody>
)

export default ( {viewModel}: MachineTableProps ) => (
    <Card>
    <CardHeader>
        <i className="fa fa-align-justify"></i> Máquinas Filtradas
    </CardHeader>
    <CardBody>
        <Table responsive bordered striped hover size="md">
            <thead>
                <tr>
                    <th>Ip Público</th>
                    <th>Ip Privado</th>
                    <th>Dns Público</th>
                    <th>Dono</th>
                    <th>Cloud Provider</th>
                </tr>
            </thead>
            <Observer>{() => renderBody(viewModel)}</Observer>
        </Table>
    </CardBody>
</Card>
)