import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    height: '100vh',
    margin: 0,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function App() {
  const classes = useStyles();
  //const theme = useTheme();
  //console.log(theme);

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.root}>Sysco Digital Onboarding</Typography>
    </div>
  );
}