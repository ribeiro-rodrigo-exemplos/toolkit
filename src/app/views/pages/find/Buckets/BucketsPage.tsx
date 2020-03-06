import React from 'react'
import {  } from 'mobx'

import { useStore } from '../../../../store'

import { 
    Row, 
    Col
} from 'reactstrap'

import BucketsFiler from './BucketsFilter'
import BucketsTable from './BucketsTable'

export default () => {

    const context = useStore()
    const bucketViewModel = context.provideBucketViewModel() 
 
    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="6" lg="12">
                    <BucketsFiler viewModel={bucketViewModel}/> 
                </Col>
            </Row>
            <Row>
                <Col xs="6" lg="12">
                    <BucketsTable viewModel={bucketViewModel}/> 
                </Col>
            </Row>
        </div>

    )
}

