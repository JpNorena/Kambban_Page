import React, { Component } from 'react';
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";

export class statistics extends Component {
    render() {
        return (
            <div className = "app-wrapper">
                <ContainerHeader
                     match={this.props.match}
                    title={<IntlMessages id="pages.statistics" />}
                />
                <div className = "page-heading">
                    <h3>Se mostraran las estadisticas de la pagina</h3>
                </div>    
            </div>            
        )
    }
}

export default statistics
