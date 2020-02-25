import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import IntlMessages from "util/IntlMessages";
import { URL } from 'constants/ActionTypes'
import Loader from 'react-loader-spinner'

const columns = [
  {
    name: "name",
    label: <IntlMessages id="appModule.name" />,
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "username",
    label: <IntlMessages id="appModule.username" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "email",
    label: <IntlMessages id="sidebar.appModule.mail" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "company.name",
    label: <IntlMessages id="company.name" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "user_type.name",
    label: <IntlMessages id="company.userType" />,
    options: {
      filter: true,
      sort: false
    }
  }
];

const options = {
  filterType: "checkbox",
  sort: false,
  search: false,
  print: false,
  download: false,
  selectableRows: "none"
};

export default class DataBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(`${URL}/users`)
      .then(res => res.json())
      .then(({
        data
      }) => {
    
        this.setState({
          isLoaded: true,
          users:data.records
        });
      });
  }

  render() {
    let { isLoaded, users } = this.state;
    if (!isLoaded) {
      return (
        <div className = "page-heading">
          <Loader type="Audio" color="#3f51b5" height={80} width={80} />
        </div>
      );
    } else {
      return (
        <div>
          <MUIDataTable
            title={
              <h1>
                <IntlMessages id="user.list" />
              </h1>
            }
            data={users}
            columns={columns}
            options={options}
          />
        </div>
      );
    }
  }
}