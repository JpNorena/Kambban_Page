import React, { useState, useEffect } from "react";
import "./mystyles.css";
import IntlMessages from "util/IntlMessages";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label className="label "><IntlMessages id="appModule.name" /></label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label className="label "><IntlMessages id="appModule.username" /></label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label className="label "><IntlMessages id="sidebar.appModule.mail" /></label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label className="label "> <IntlMessages id="appModule.password" /></label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <label className="label "><IntlMessages id="company.userType" /></label>
      <input
        type="text"
        name="user_type"
        value={user.user_type}
        onChange={handleInputChange}
      />
      <label className="label "> <IntlMessages id="company.name" /></label>
      <input
        type="text"
        name="company"
        value={user.company}
        onChange={handleInputChange}
      />
      <button className="button button2"><IntlMessages id="user.update"/></button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button button2"
      >
        <IntlMessages id="form.cancel"/>
      </button>
    </form>
  );
};

export default EditUserForm;
