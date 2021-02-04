import React, { useContext } from 'react';
import clsx from 'clsx';
import {
	AppBar,
	Badge,
	createStyles,
	Divider,
	Drawer,
	Fab,
	Grid,
	IconButton,
	Link,
	List,
	makeStyles,
	Paper,
	Theme,
	Toolbar,
	Typography,
} from '@material-ui/core';

import {
	Clear as ClearIcon,
	Menu as MenuIcon,
	Notifications as NotifiactionsIcon,
} from '@material-ui/icons';

import { AppContext } from "./../../AppContext";
import Content from "./../Home/Content";
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.default,
		},
		fabIcon: {
			bottom: 0,
			//float: 'right',
			backgroundColor: theme.palette.secondary.light,
			'&:hover': {
				backgroundColor: theme.palette.secondary.dark,
			},
		},	
	}),
);

export default function Dashboard() {
	const classes = useStyles();
	//const [isMenuOpen, setIsMenuOpen, badgeCount, setBadgeCount] = useContext(AppContext);

	return (
		<div className={classes.root}>	
			<Header/>
			<Content/>
			<Footer/>
			<Menu/>
			{/* <Fab color="secondary" className={classes.fabIcon}>
				<ClearIcon/>
			</Fab> */}
		</div>
	);
}