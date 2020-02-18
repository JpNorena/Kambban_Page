import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages'

class supportList extends Component {
    render() {
        return (
            <div className = "app-wrapper">
                <ContainerHeader
                    match={this.props.match}
                    title={<IntlMessages id="pages.supportList" />}
                />
                <div className="page-heading">
                    <span>Lisa de soporte</span>
                    <ul>
                        <li>
                            Listar los soportes enviados y su estado
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default supportList
