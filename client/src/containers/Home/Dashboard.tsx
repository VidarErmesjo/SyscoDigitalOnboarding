import React from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  createStyles,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  Clear as ClearIcon,
  Menu as MenuIcon,
  Notifications as NotifiactionsIcon,
} from '@material-ui/icons';

import Footer from './../../components/Footer/Footer';
import Menu from './../../components/Menu/Menu';

import {
  menuListItems,
} from './../../menuListItems';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 250;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
    title: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarOpen: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    badge: {
      color: theme.palette.primary.light,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      display: 'none',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      //width: theme.spacing(7),
      //[theme.breakpoints.up('sm')]: {
        //width: theme.spacing(9),
      //},
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    paper: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    toolbar: {
      //paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      //padding: '0 8px',
      ...theme.mixins.toolbar,
    },
  }),
);

export default function Dashboard() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [badgeCount, setBadgeCount] = React.useState(99);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleDrawerOnClick = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        //className={clsx(classes.appBar, open && classes.appBarOpen)}
        >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open menu"
            //className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            //className={classes.menuButton}
            onClick={toggleMenu}>
            <MenuIcon color="secondary"/>
          </IconButton>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>Sysco Digital Onboarding</Typography>
          <IconButton>
            <Badge
              badgeContent={badgeCount}
              className={classes.badge}
              color="secondary"
              onClick={() => setBadgeCount(c => c - 1)}>
              <NotifiactionsIcon/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Footer/>
      <Copyright/>

      <Menu 
        open={open}

        toggleMenu={toggleMenu}/>


    </div>
  );
}