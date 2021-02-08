import React from 'react';

import {
	ButtonBase,
	createStyles,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Theme,
} from '@material-ui/core';

import {
	Dashboard as DashboardIcon,
	Info as InfoIcon,
} from '@material-ui/icons';

import { MenuContext } from './../../MenuContext';
import About from './../About/About';
//import TransparentDrawer from './../Custom/TransparentDrawer';
import { menuListItems } from './../../menuListItems';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			backgroundColor: 'transparent',
		},
		list: {
			width: 'auto',
			height: '100vh',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.primary.main,
			borderStyle: 'solid',
			border: 0,
			borderColor: theme.palette.primary.light,
			//borderTopWidth: theme.spacing(0.25),
			borderRightWidth: theme.spacing(0.25),
			//borderBottomWidth: theme.spacing(0.25),
		},
		divider: {
			backgroundColor: theme.palette.primary.light,
		}
	}),
);

export default function Menu() {
	const classes = useStyles();
	const { isMenuOpen, toggleMenu, isAboutOpen, toggleAbout } = React.useContext(MenuContext);

	console.log(isAboutOpen);

	return (	
		<React.Fragment>
			<Drawer
				anchor="left"
				open={isMenuOpen}
				onClose={toggleMenu}
				classes={{ paper: classes.drawer }}
				>
				<List
					role="presentation"
					className={classes.list}
					>
					<ListItem button>
						<ListItemIcon onClick={toggleMenu}>
							<DashboardIcon color="secondary"/>
						</ListItemIcon>
						<ListItemText primary={null}/>
					</ListItem>
					<Divider className={classes.divider}/>
					{menuListItems}
					<Divider className={classes.divider}/>
					<ListItem>
						<ButtonBase onClick={toggleAbout}>
							<ListItemIcon>
								<InfoIcon color="secondary"/>
							</ListItemIcon>
							<ListItemText primary="Om oss"/>
						</ButtonBase>
					</ListItem>
				</List>
			</Drawer>
			<About open={isAboutOpen} toggle={toggleAbout}/>
		</React.Fragment>
	);
}