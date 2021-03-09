import React from 'react';
import {
	Box,
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Typography,
} from '@material-ui/core';

import { SessionContext } from './SessionContext';
import Dashboard from './containers/Home/Dashboard';
import Header from './components/Header/Header';
import Login from './containers/Session/Login';
import SessionProgress from './containers/Session/SessionProgress';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.primary.dark,
			height: '100vh',
		},
		header: {
			height: theme.spacing(7),
			backgroundColor: theme.palette.primary.main,
		},
		content: {
			//overflowY: 'clip',
		},
		footer: {
			position: 'fixed',
			width: '100%',
			height: theme.spacing(14),
			textAlign: 'center',
			//left: 0,
			bottom: 0,
			backgroundColor: theme.palette.primary.main,
			//zIndex: 3,
		},
	}),
);

export default function App() {
	const classes = useStyles();
	const { session } = React.useContext(SessionContext);

	const version = React.version;

	document.body.style.overflow = 'hidden';	// Fjerner scrolling

	return (
		<Grid
			container
			justify="flex-start"
			alignItems="flex-start"
			//spacing={5}
			className={classes.root}
			>
			<Grid item xs={12} className={classes.header}>
				<Header/>
			</Grid>
			<Grid item xs={12} className={classes.content}>
				{!session ? <Login/> : <Dashboard/>}
			</Grid>
			<Grid item xs={12} className={classes.footer}>
				{!session && <Typography variant="caption" color="textPrimary">React version: {version}</Typography>}
				{session && <SessionProgress/>}
			</Grid>
		</Grid>
	);
}