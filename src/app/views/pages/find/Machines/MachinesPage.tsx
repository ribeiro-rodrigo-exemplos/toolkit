import React from 'react'
import {  } from 'mobx'

import { useStore } from '../../../../store'

import { 
    Row, 
    Col
} from 'reactstrap'

import MachinesFilter from './MachinesFilter'
import MachinesTable from './MachinesTable'

export default () => {
    const context = useStore()
    const machineViewModel = context.provideMachineViewModel()

    
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="6" lg="12">
                    <MachinesFilter viewModel={machineViewModel}/> 
                </Col>
            </Row>
            <Row>
                <Col xs="6" lg="12">
                    <MachinesTable viewModel={machineViewModel}/> 
                </Col>
            </Row>
        </div>

    )
     
}
