import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';

import {
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Typography,
} from '@material-ui/core';

import { UserContext } from './../../UserContext';

import Intro from "./../../routes/Intro/Intro";
import Part1 from "./../../routes/Part1/Part1";
import Part2 from "./../../routes/Part2/Part2";
import Part3 from "./../../routes/Part3/Part3";
import Part4 from "./../../routes/Part4/Part4";
import Part5 from "./../../routes/Part5/Part5";
import Outro from "./../../routes/Outro/Outro";

import Content from "./../Home/Content";
import UserProgess from "./../User/UserProgress";
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
			justifyContent: 'center',
			//margin: theme.spacing(6, 0, 6, 0),
		},
		stepper: {
            backgroundColor: theme.palette.primary.dark,
        },
	}),
);

function Part() {
	return <Typography color="secondary">Banan!</Typography>
}

function Login() {
	return (
		<React.Fragment>
			<Typography color="secondary">Please log in!</Typography>
		</React.Fragment>
	);
}

export default function Dashboard() {
	const classes = useStyles();
	const version = React.version;

	const { isLoggedIn } = React.useContext(UserContext);

	//document.body.style.overflow = 'hidden';	// Fjerner scrolling

	return (
		<Router>
			<div className={classes.root}>

				<Link to="/test">Test</Link>
				<Switch>
					<Route exact path="/" component={Login}/>
					<Route path="/test" component={Part}/>
					<Route path="/intro" component={Intro}>

					</Route>
					<Route path="/generisk-presentasjon">
						<Part1/>
					</Route>
					<Route path="/tilpasset-presentasjon">
						<Part2/>
					</Route>
					<Route path="/hva-skjer-naar-du-er-ansatt">
						<Part3/>
					</Route>
					<Route path="/har-du-alt-du-trenger-av-kontoer">
						<Part4/>
					</Route>
					<Route path="/noe-motiverende-for-foerste-dagen">
						<Part5/>
					</Route>
					<Route path="outro">
						<Outro/>
					</Route>
				</Switch>
				<UserProgess/>
				<Typography color="secondary">React version: {version}</Typography>
			</div>
		</Router>
	);
}