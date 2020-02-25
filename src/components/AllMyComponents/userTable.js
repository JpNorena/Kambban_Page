import React from "react";
import "./mystyles.css";
import IntlMessages from "util/IntlMessages";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th className="label">
          <IntlMessages id="appModule.name" />
        </th>
        <th className="label">
          <IntlMessages id="appModule.username" />
        </th>
        <th className="label">
          <IntlMessages id="sidebar.appModule.mail" />
        </th>
        <th className="label">
          <IntlMessages id="appModule.password" />
        </th>
        <th className="label">
          <IntlMessages id="company.userType" />
        </th>
        <th className="label">
          <IntlMessages id="company.name" />
        </th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td className="label">{user.name}</td>
            <td className="label">{user.username}</td>
            <td className="label">{user.email}</td>
            <td className="label">{user.password}</td>
            <td className="label">{user.user_type}</td>
            <td className="label">{user.company}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button button2"
              >
                <IntlMessages id="button.edit" />
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button button2 muted-button"
              >
                <IntlMessages id="button.delete" />
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="label" colSpan={3}>
            No users
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
