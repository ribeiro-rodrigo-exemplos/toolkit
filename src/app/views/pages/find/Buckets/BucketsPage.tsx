import React from 'react'

import { 
    Row, 
    Col
} from 'reactstrap'

import BucketsFiler from './BucketsFilter'
import BucketsTable from './BucketsTable'

export default () => (
    <div className="animated fadeIn">
        <Row>
            <Col xs="6" lg="12">
                <BucketsFiler/> 
            </Col>
        </Row>
        <Row>
            <Col xs="6" lg="12">
                <BucketsTable/> 
            </Col>
        </Row>
    </div>
)