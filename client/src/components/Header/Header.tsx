import React from 'react';
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
	AccountCircle as AccountCircleIcon,
    Clear as ClearIcon,
    Menu as MenuIcon,
    Notifications as NotifiactionsIcon,
  } from '@material-ui/icons';

import { AppContext } from '../../AppContext';
import { MenuContext } from '../../MenuContext';
import { UserContext } from '../../UserContext';

const drawerWidth = 250;
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			backgroundColor: theme.palette.background.default,
		},
		title: {
			display: 'flex',
			flexGrow: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		appBar: {
			//position: 'absolute',
			display: 'flex',
			flexGrow: 1,
			top: 0,
			backgroundColor: theme.palette.primary.main,
			//marginBottom: 80,
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
		fabIcon: {
			float: 'right',
			backgroundColor: theme.palette.secondary.light,
			'&:hover': {
				backgroundColor: theme.palette.secondary.dark,
			},
		},	
		paper: {
			backgroundColor: theme.palette.background.default,
			padding: theme.spacing(2),
			display: 'flex',
			overflow: 'auto',
			flexDirection: 'column'
		},
		toolbarIcon: {
			//color: theme.palette.primary.light,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
	}),
);

export default function Header() {
	const classes = useStyles();
	const { decrement, badgeCount } = React.useContext(AppContext);
	const { toggleMenu } = React.useContext(MenuContext);
	const { isLoggedIn } = React.useContext(UserContext);

	return (
		<React.Fragment>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar variant="dense">
					<IconButton
						color="inherit"
						edge="start"
						onClick={toggleMenu}
						>
						<MenuIcon
							className={classes.toolbarIcon}
							color="secondary"
							/>
					</IconButton>
					<Typography
						component="h1"
						variant="h6"
						noWrap
						className={classes.title}
						>
						Sysco Digital Onboarding
					</Typography>
					<IconButton
						color="inherit"
						onClick={decrement}
						>
						<Badge
							badgeContent={badgeCount}
							className={classes.badge}
							color="secondary"
							>
							<NotifiactionsIcon/>
						</Badge>
					</IconButton>
					{isLoggedIn ?
					<IconButton>
						<AccountCircleIcon color="secondary"/>
					</IconButton> : null}
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}