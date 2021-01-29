import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

import Dashboard from './containers/Home/Dashboard';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    textAlign: "center",
    //height: '100vh',
    maxWidth: '100vw',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: '#000', //theme.palette.background.default,
  },
  fabIcon: {
    float: 'right',
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
      <Dashboard/>
  );
}