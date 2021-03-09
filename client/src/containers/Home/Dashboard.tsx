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

import { SessionContext } from '../../SessionContext';

import Intro from "./../../routes/Intro/Intro";
import Part1 from "./../../routes/Part1/Part1";
import Part2 from "./../../routes/Part2/Part2";
import Part3 from "./../../routes/Part3/Part3";
import Part4 from "./../../routes/Part4/Part4";
import Part5 from "./../../routes/Part5/Part5";
import Outro from "./../../routes/Outro/Outro";

import Content from "./../Home/Content";
import SessionProgress from "../Session/SessionProgress";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		stepper: {
            backgroundColor: theme.palette.primary.dark,
        },
	}),
);

function Home() {
	return <Typography color="secondary">Feels like home</Typography>
}

export default function Dashboard() {
	const classes = useStyles();
	const version = React.version;

	const { session } = React.useContext(SessionContext);

	return (
		<Router>
			<div>

				<Switch>
					<Route exact path="/" component={Home}/>
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
				<Typography color="secondary">React version: {version}</Typography>
			</div>
		</Router>
	);
}