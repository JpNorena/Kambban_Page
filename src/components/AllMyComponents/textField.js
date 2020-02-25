import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IntlMessages from "util/IntlMessages";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width:480,
      marginBottom: 10
    }
  }
}));

function MyTextField() {
  const classes = useStyles();
  const [name, postName] = useState();
  const [username, postUserName] = useState();
  const [email, postEmail] = useState();
  const [password, postPassword] = useState();
  const [company_id, postCompanyId] = useState();
  const [user_type_id, postuserTypeId ] = useState();


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label={<IntlMessages id="appModule.name" name="name" />} > </TextField>
      <TextField id="outlined-basic" label={<IntlMessages id="appModule.username" name="username"/>} > </TextField>
      <TextField id="outlined-basic" label={<IntlMessages id="sidebar.appModule.mail" name="email"/>} > </TextField>
      <TextField id="outlined-basic" label={<IntlMessages id="appModule.password" name="password"/>}> </TextField>
      <TextField id="outlined-basic" label={<IntlMessages id="company.name" name="company_id"/>} > </TextField>
      <TextField id="outlined-basic" label={<IntlMessages id="company.userType" name="user_type_id"/>} > </TextField>
    </form>
    
  );
}

export default MyTextField;
