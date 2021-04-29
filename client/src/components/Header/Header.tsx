import React from 'react';

import {
	createStyles,
	makeStyles,
	Theme,
	Typography,
	useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import { getCategoryFromRoute, getRouteFromStep } from './../../api';

import shallow from 'zustand/shallow';
import { Zustand } from './../../store';

import SessionButton from './SessionButton';
import Logo from './Logo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.primary.main,
			position: 'fixed',
            top: 0,
			left: 0,
			width:'100%',
			height: theme.spacing(7),
			zIndex: theme.zIndex.appBar,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		heading: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: `translate(-50%, -50%)`,
			userSelect: 'none',
		}
    })
);

export default function Header() {
	const [user, currentStep, isLoading] = Zustand.useStore(state => [
		state.user,
		state.currentStep,
		state.isLoading
	]);

	const classes = useStyles();
	const theme = useTheme();
	const category = getCategoryFromRoute(getRouteFromStep(currentStep));

	const Heading = (): JSX.Element => {
		return (
			<Spring
				from={{ opacity: 0 }}
				to={{ opacity: user ?  1 : 0 }}
				config={{ duration: theme.transitions.duration.enteringScreen }}
				>
				{props => <div style={props}>
					<Typography
						variant="h6"
						color="textPrimary"
						className={classes.heading}
						>
						{category.title?.toString()}
					</Typography>
				</div>}
			</Spring>
		);
	}

	return (
		<React.Fragment>
			<header id="header" className={classes.root}>
				<SessionButton/>
				{!isLoading && <Heading/>}
				<Logo/>
			</header>
		</React.Fragment>
	);
}