import React, { useContext } from 'react';
import clsx from 'clsx';
import {
	AppBar,
	Badge,
	createStyles,
	Container,
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

import { UserProvider } from "./../../UserContext";
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
			backgroundColor: theme.palette.primary.dark,
			minHeight: '100vh',
		},
	}),
);

export default function Dashboard() {
	const classes = useStyles();

	document.body.style.overflow = 'hidden';	// Fjerner scrolling

	return (
		<div className={classes.root}>
				<Header/>
				<Menu/>
				<Content/>
		</div>
	);
}