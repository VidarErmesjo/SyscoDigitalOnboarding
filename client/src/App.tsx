import React from 'react';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { makeStyles, createStyles, useTheme, Theme } from '@material-ui/core/styles';
//import './App.css';
import DenseAppBar from './components/DenseAppBar';
import SimpleContainer from './components/SimpleContainer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    textAlign: "center",
    //height: '100vh',
    //minHeight: '50vh',
    //maxHeight: '100vh',
    //margin: 0,
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

      {/* <Typography variant="h1" className={classes.root}>Sysco Digital Onboarding</Typography> */}
      <DenseAppBar/>
      <SimpleContainer/>
    </div>
  );
}