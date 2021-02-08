import React from 'react';
import {
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core';

import Content from "./../Home/Content";
import Header from './../../components/Header/Header';
import Menu from './../../components/Menu/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.primary.dark,
			height: '100vh',
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