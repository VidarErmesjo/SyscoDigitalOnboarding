import React from 'react';
import {
    AppBar,
    Badge,
	Box,
    createStyles,
    Divider,
	Drawer,
    IconButton,
    Link,
    List,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
  } from '@material-ui/core';
  
  import {
	AccountCircle as AccountCircleIcon,
    Clear as ClearIcon,
    Menu as MenuIcon,
    Notifications as NotifiactionsIcon,
  } from '@material-ui/icons';

const drawerWidth = 250;
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			width: '100%',
			left: 0,
			right: 0,
			//display: 'flex',
			//backgroundColor: theme.palette.background.default,
		},
	}),
);

export default function Header() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Box
				//textAlign="right"
				alignContent="center"
				justifyContent="center"
				marginRight={2}
				marginBottom={0}
				//className={classes.header}
				>
				<AccountCircleIcon color="secondary" style={{ float: 'left'}}/>
				<Typography variant="h3" color="textPrimary" style={{ float: 'right'}}>SYSCO</Typography>

			</Box>
		</React.Fragment>
	);
}