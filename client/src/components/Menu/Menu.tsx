// React
import React, { useContext } from 'react';

// Material UI
import {
	createStyles,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Theme,
} from '@material-ui/core';

// Material Icons
import {
	Clear as ClearIcon,
	DateRange as DateRangeIcon,
	LocationOn as LocationOnIcon,
	RotateRight as RotateRightIcon,
	Search as SearchIcon,
	Timer as TimerIcon,
} from '@material-ui/icons';

// App
import { AppContext } from "./../../AppContext";
import { menuListItems } from './../../menuListItems';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		list: {
			width: 'auto',
			height: '100vh',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.primary.main,
		},
	}),
);

export default function Menu() {
	const classes = useStyles();
	const { toggleMenu, isMenuOpen } = useContext(AppContext);

	return (	
		<React.Fragment>
			<Drawer
				anchor="left"
				open={isMenuOpen}
				//onClose={() => setIsMenuOpen((state: boolean) => false)}
				onClose={toggleMenu}
				>
				<List
					role="presentation"
					//onClick={() => setIsMenuOpen((state: boolean) => !isMenuOpen)}
					onClick={toggleMenu}
					className={classes.list}
					>
					{menuListItems}
				</List>
			</Drawer>					
		</React.Fragment>
	);
}