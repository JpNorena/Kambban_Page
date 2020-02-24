import React, { Component } from 'react'
import Company from 'components/AllMyComponents/companyCRUD'
import CrudButton from "../../../components/AllMyComponents/buttons"

export class newCompany extends Component {
    render() {
        return (
            <div className = "app-wrapper">
                <div className = "page-heading">
                    <Company />
                    <CrudButton />
                </div>
            </div>
        )
    }
}

export default newCompany
