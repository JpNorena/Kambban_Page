import MUIDataTable from "mui-datatables";
import React from "react";
import IntlMessages from "util/IntlMessages";


const columns = [
  {
    name: "name",
    label: <IntlMessages id="appModule.name"/>,
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
    name: "mail",
    label: <IntlMessages id="sidebar.appModule.mail" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "password",
    label: <IntlMessages id="appModule.password" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "companyName",
    label: <IntlMessages id="company.name" />,
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "userType",
    label: <IntlMessages id="company.userType" />,
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  { name: "Joe James", username: "Test Corp", mail: "Yonkers", password: "NY" , companyName: "emmmmm", userType: "Nore"},
  { name: "John Walsh", username: "Test Corp", mail: "Hartford", password: "CT" , companyName: "emmmmm", userType: "Nore"},
  { name: "Bob Herm", username: "Test Corp", mail: "Tampa", password: "FL" , companyName: "emmmmm", userType: "Nore"},
  { name: "James Houston", username: "Test Corp", mail: "Dallas", password: "TX" , companyName: "emmmmm", userType: "Nore"}
];

const options = {
  filterType: "checkbox"
};

export default function DataBox() {
  return (
    <MUIDataTable
      title={<h1><IntlMessages id="user.list"/></h1>}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
