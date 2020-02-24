import React, { Component } from 'react'
import IntlMessages from 'util/IntlMessages'
import TextField from '@material-ui/core/TextField'

export class companyCRUD extends Component {
    render() {
        return (
            <div>
                <form noValidate autoComplete = "off">
                    <TextField id = "outlined-basic" label = {<IntlMessages id = "company.name"/>}/>
                </form>
            </div>
        )
    }
}

export default companyCRUD
