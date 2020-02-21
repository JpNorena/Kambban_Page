import React from "react";
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label={<IntlMessages id="appModule.name" />} />
      <TextField id="outlined-basic" label={<IntlMessages id="appModule.username" />} />
      <TextField id="outlined-basic" label={<IntlMessages id="sidebar.appModule.mail" />} />
      <TextField id="outlined-basic" label={<IntlMessages id="appModule.password" />} />
      <TextField id="outlined-basic" label={<IntlMessages id="company.name" />} />
      <TextField id="outlined-basic" label={<IntlMessages id="company.userType" />} />
    </form>
    
  );
}

export default MyTextField;
