import React from 'react'

import {
    Card, 
    CardHeader, 
    CardBody
} from 'reactstrap'

interface Props{
    children: React.ReactNode
}

export default ({ children }: Props) => (
    <Card>
        <CardHeader>
            <i className="fa fa-search"></i> Filtros
        </CardHeader>
        <CardBody>
            { children }
        </CardBody>
    </Card>
)