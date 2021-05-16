import React from 'react';

import {
	createStyles,
	makeStyles,
	Theme,
	useTheme
} from '@material-ui/core';

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
	const [user] = Zustand.useStore(state => [state.user]);
	const classes = useStyles();
	const theme = useTheme();

	return (
		<React.Fragment>
			<header
				id="header"
				className={classes.root}
				//style={{ backgroundColor: user ? theme.palette.background.default : theme.palette.primary.main }}
				>
				<SessionButton/>
				<Logo/>
			</header>
		</React.Fragment>
	);
}