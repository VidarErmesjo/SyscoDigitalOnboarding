import React from 'react';
import {
	BrowserRouter,
	Switch
} from 'react-router-dom';

import {
	createStyles,
	Grid,
	makeStyles,
	Theme,
} from '@material-ui/core';

import Feed from './components/Content/Feed';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 0,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.primary.dark,
			height: '100vh',
		},
		header: {
			backgroundColor: theme.palette.primary.main,
			width: '100%',
			height: theme.spacing(7),
			zIndex: 2,
		},
		content: {
			width: 'fit-content',
			height: 'fit-content',
			textAlign: 'center',
			zIndex: 0,
		},
		footer: {
			position: 'fixed',
			backgroundColor: theme.palette.primary.dark,
			width: '100%',
			height: 'auto',
			bottom: 0,
			zIndex: 1,
		},
	}),
);

export default function App(props: any) {
	const classes = useStyles();

	document.body.style.overflow = 'hidden';	// Deaktiverer scrolling

	return (
		<BrowserRouter>
			<Switch>
				<React.Fragment>
					<Grid
						container
						justify="flex-start"
						alignItems="flex-start"
						className={classes.root}
						>
						<Grid id="header"
							item
							xs={12}
							className={classes.header}
							>
							<Header/>
						</Grid>
						<Grid id="content"
							item
							xs={12}
							className={classes.content}
							>
							<Feed/>
						</Grid>
						<Grid id="footer"
							item
							xs={12} 
							className={classes.footer}
							>
							<Footer/>
						</Grid>
					</Grid>
				</React.Fragment>
			</Switch>
		</BrowserRouter>
	);
}