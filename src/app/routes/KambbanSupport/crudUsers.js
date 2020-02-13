import React, { Component } from "react";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";
import MyTextField from "../../../components/AllMyComponents/textField";
import DataBox from "../../../components/AllMyComponents/dataBox";
import CrudButton from "../../../components/AllMyComponents/buttons";

class crudUsers extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="pages.crud" />}
        />
        <div>
          <div className="page-heading">
            <MyTextField />
            <CrudButton />
          </div>
            <DataBox/>
        </div>
      </div>
    );
  }
}

export default crudUsers;
