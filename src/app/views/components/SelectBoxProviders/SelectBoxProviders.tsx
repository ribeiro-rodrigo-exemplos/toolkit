import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

import { cloudProvider } from '../../../models/entities'

export default () => (
    <FormGroup>
        <Label htmlFor="provider">Cloud Provider</Label>
        <Input type="select" id="provider">
            <option value="all">Todos</option>
            <option value="aws">{cloudProvider.AMAZON}</option>
            <option value="gcloud"> {cloudProvider.GCLOUD} </option>
            <option value="azure"> {cloudProvider.AZURE} </option>
        </Input>
    </FormGroup>
)