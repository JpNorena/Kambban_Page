import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import IntlMessages from "util/IntlMessages";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CrudButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" color="primary">{<IntlMessages id="button.add"/>}</Button>
        <Button variant="contained" color="primary">{<IntlMessages id="button.delete"/>}</Button>
      </ButtonGroup>
    </div>
  );
}