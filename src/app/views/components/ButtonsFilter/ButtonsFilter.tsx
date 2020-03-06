import React from 'react'

import { Button } from 'reactstrap'

interface ButtonsFilterProps{
    findClickListener: (event: React.MouseEvent) => void 
    cleanClickListener: (event: React.MouseEvent) => void 
}

export default ({ findClickListener, cleanClickListener }: ButtonsFilterProps) => (
    <React.Fragment>
        <Button color="secondary" onClick={cleanClickListener} className="float-right">Limpar</Button>
        <Button color="primary" onClick={findClickListener} className="float-right horizontal-margin-right-5" >Buscar</Button>
    </React.Fragment>
)