import React, { useContext } from 'react';
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

import { AppContext } from '../../AppContext';

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
			//position: 'absolute',
			display: 'flex',
			flexGrow: 1,
			top: 0,
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
		toolbar: {
			//paddingRight: 24, // keep right padding when drawer closed
		},
		toolbarIcon: {
			//color: theme.palette.primary.light,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		offset: theme.mixins.toolbar,
	}),
);

export default function Header() {
	const classes = useStyles();
	const [isMenuOpen, setIsMenuOpen, badgeCount, setBadgeCount] = useContext(AppContext);

	return (
		<React.Fragment>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar variant="dense" className={classes.toolbar}>
					<IconButton
						color="inherit"
						edge="start"
						aria-label="menu"
						onClick={() => setIsMenuOpen((state: boolean) => true)}
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
						aria-label="notification badge"
						color="inherit"
						onClick={() => setBadgeCount((count: number) => count - 1)}
						>
						<Badge
							badgeContent={badgeCount}
							className={classes.badge}
							color="secondary"
							>
							<NotifiactionsIcon/>
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}