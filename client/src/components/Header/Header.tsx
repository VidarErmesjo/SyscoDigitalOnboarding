import React from 'react';

import {
	Box,
	createStyles,
	makeStyles,
	Theme,
	Typography
} from '@material-ui/core';

import { config } from './../../api';

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
			flex: '0 0 row',
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

export default function Header(props: any) {
	const currentStep = Zustand.useStore(state => state.currentStep);

	const classes = useStyles();
	// Dypere array-struktur => må ordne mer.
	//const heading = config?.[currentStep!];

	return (
		<React.Fragment>
			<header id="header" className={classes.root}>
				<SessionButton/>
				<Typography
					variant="h5"
					color="textPrimary"
					className={classes.heading}
					>
					{/* {heading.title!} */} TITTEL
				</Typography>
				<Logo/>
			</header>
		</React.Fragment>
	);
}