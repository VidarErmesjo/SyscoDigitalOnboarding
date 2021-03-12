import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';

import {
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Typography,
} from '@material-ui/core';

import {
	ChevronLeft as LeftIcon,
	ChevronRight as RightIcon
} from '@material-ui/icons';

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
			zIndex: 1,
		},
		content: {
			textAlign: 'center',
			//justifyContent: 'center',
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

export default function App() {
	const classes = useStyles();

	document.body.style.overflow = 'hidden';	// Deaktiverer scrolling

	/*const [blank, setBlank] = React.useState<undefined | boolean>(undefined);
	let ratio: undefined | number = undefined;
	React.useEffect(() => {
		function handleResize() {
			ratio = window.innerWidth / window.innerHeight;

			console.log(ratio);

			if(ratio < (3/2) || ratio > 1.78) {
				setBlank(true);
			}
			else {
				setBlank(false);
			}
		}
		window.onresize = handleResize;
	})*/

	return (
		<Router>
			<Switch>
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
			</Switch>
		</Router>
	);
}