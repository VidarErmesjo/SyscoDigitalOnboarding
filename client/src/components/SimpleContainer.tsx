import React from 'react';
import {
    Container,
    createStyles,
    CssBaseline,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      textAlign: "center",
      //height: '100vh',
      //minHeight: '50vh',
      //maxHeight: '100vh',
      //margin: 0,
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.secondary.main,
    },
  }));

export default function SimpleContainer() {
    const classes = useStyles();

    return (
    <React.Fragment>

        <div className={classes.root}>
        Skrive noe
        </div>
    </React.Fragment>
    );
}