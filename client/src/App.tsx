import React from 'react';
import { Box, Container, CssBaseline, Fab, Typography } from '@material-ui/core';
import { makeStyles, createStyles, useTheme, Theme, ThemeProvider } from '@material-ui/core/styles';
//import { UpIcon } from '@material-ui/icons';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import DenseAppBar from './components/DenseAppBar';
import SimpleContainer from './components/SimpleContainer';

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
  //const theme = useTheme();
  //console.log(theme);

  return (
    <Container className={classes.root}>
      {/* <Typography variant="h1" className={classes.root}>Sysco Digital Onboarding</Typography> */}
      <DenseAppBar/>

      <Fab className={classes.fabIcon}>
        <UpIcon/>
      </Fab>
    </Container>
  );
}