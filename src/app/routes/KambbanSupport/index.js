import React, { Component } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

export class Prueba extends Component {

    render() {
      return (
        <div className="app-wrapper">
          <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>
          <div className="d-flex justify-content-center">
            <h1><IntlMessages id="pages.samplePage.description"/></h1>
          </div>
  
        </div>
      );
    }
  }
export default Prueba
