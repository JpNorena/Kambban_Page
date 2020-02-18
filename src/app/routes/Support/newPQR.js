import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages'

class newPQR extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match}
                                  title={<IntlMessages id = "pages.newPQR"/>}/>

                <div className="page-heading">
                    <span>Creacion de solicitudes</span>
                </div>
            </div>
        )
    }
}

export default newPQR
