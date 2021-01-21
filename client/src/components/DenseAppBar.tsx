import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';

import {
  createStyles,
  makeStyles,
  Theme } from '@material-ui/core/styles';
  
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Sysco Digital Onboarding
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}