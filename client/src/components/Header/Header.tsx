import React from 'react';

import {
	Box,
	createStyles,
	makeStyles,
	Theme,
} from '@material-ui/core';

import SessionButton from './SessionButton';
import SyscoLogo from './SyscoLogo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: theme.palette.primary.main,
			position: 'fixed',
            top: 0,
			width:'100%',
			height: theme.spacing(7),
			zIndex: theme.zIndex.appBar,
		},
    })
);

export default function Header(props: any) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box id="header" className={classes.root}>
				<SessionButton/>
				<SyscoLogo/>
			</Box>
		</React.Fragment>
	);
}