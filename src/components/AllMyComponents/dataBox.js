import MUIDataTable from "mui-datatables";
import React, { Component } from "react";
import IntlMessages from "util/IntlMessages";

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
    name: "company_id",
    label: <IntlMessages id="company.name" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "user_type_id",
    label: <IntlMessages id="company.userType" />,
    options: {
      filter: true,
      sort: false
    }
  }
];

const options = {
  filterType: "checkbox"
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
    fetch("http://127.0.0.1:8080/api/users")
      .then(res => res.json())
      .then(({
        data
      }) => {
    
        this.setState({
          isLoaded: true,
          users:data.data
        });
      });
  }

  render() {
    let { isLoaded, users } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <IntlMessages id="isLoading" />
          {console.log(isLoaded.state)}
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
