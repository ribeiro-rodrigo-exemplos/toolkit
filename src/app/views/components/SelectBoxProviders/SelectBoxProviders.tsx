import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

import { cloudProvider } from '../../../models/entities'

interface SelectBoxProvidersProps{
    selectListener: (event:React.ChangeEvent<HTMLInputElement>) => void 
    defaultValue?: string
}

export default ({ selectListener, defaultValue }: SelectBoxProvidersProps) => (
    <FormGroup>
        <Label htmlFor="provider">Cloud Provider</Label>
        <Input 
            type="select" 
            id="provider" 
            onChange={selectListener} 
            value={defaultValue ? defaultValue : "all"} >
                <option value="all">Todos</option>
                <option value="aws">{cloudProvider.AMAZON}</option>
                <option value="gcloud"> {cloudProvider.GCLOUD} </option>
                <option value="azure"> {cloudProvider.AZURE} </option>
        </Input>
    </FormGroup>
)