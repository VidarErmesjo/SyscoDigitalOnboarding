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
    <Typography variant="body2" color="textPrimary" align="center">
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
		list: {
			width: 'auto',
			height: '100vh',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.primary.dark,
		},
	}),
);

export default function() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar variant="dense">
					{/* <Typography component="h1" variant="h6">Footer</Typography> */}
					<Copyright/>

				</Toolbar>
			</AppBar>
		</div>
	);
}