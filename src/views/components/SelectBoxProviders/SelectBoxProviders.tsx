import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

export default () => (
    <FormGroup>
        <Label htmlFor="provider">Cloud Provider</Label>
        <Input type="select" id="provider">
            <option value="all">Todos</option>
            <option value="aws">Amazon Webservices</option>
            <option value="gcp">Google Cloud</option>
            <option value="azure">Azure</option>
        </Input>
    </FormGroup>
)