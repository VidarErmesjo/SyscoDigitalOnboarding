import React from 'react';

import {
	Box,
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core';

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
    })
);

export default function Header(props: any) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<header id="header" className={classes.root}>
				<span><SessionButton/></span>
				<span></span>
				<span><Logo/></span>
			</header>
		</React.Fragment>
	);
}