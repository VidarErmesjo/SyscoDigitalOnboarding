import React from 'react';
import {
	AppBar,
	createStyles,
	Link,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body1" color="textPrimary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://student.cs.hioa.no/~s318075/Bachelorprosjekt/">
        Bachelorprosjekt
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
    root: {
      display: 'flex',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
    appBar: {
			display: 'flex',
			flexGrow: 1,
			alignItems: 'center',
			justifyContent: 'center',
      top: 'auto',
      bottom: 0,
    },
	}),
);

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar variant="dense">
					<Copyright/>
				</Toolbar>
			</AppBar>
		</div>
	);
}