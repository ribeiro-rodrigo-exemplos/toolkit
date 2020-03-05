import React from 'react'

import { 
    Row, 
    Col
} from 'reactstrap'

import MachinesFilter from './MachinesFilter'
import MachinesTable from './MachinesTable'

export default () => (
    <div className="animated fadeIn">
        <Row>
            <Col xs="6" lg="12">
                <MachinesFilter/> 
            </Col>
        </Row>
        <Row>
            <Col xs="6" lg="12">
                <MachinesTable/> 
            </Col>
        </Row>
    </div>
)