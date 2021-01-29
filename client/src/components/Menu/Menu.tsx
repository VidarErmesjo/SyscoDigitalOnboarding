import React from 'react';
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

import {
	Clear as ClearIcon,
	DateRange as DateRangeIcon,
	LocationOn as LocationOnIcon,
	RotateRight as RotateRightIcon,
	Search as SearchIcon,
	Timer as TimerIcon,
} from '@material-ui/icons';

import { menuListItems } from './../../menuListItems';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		list: {
			width: 'auto',
			height: '100vh',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.primary.dark,
		},
	}),
);

export default function Menu(props: any) {
	const { open, toggleMenu } = props;
	const classes = useStyles();

	const list = (
		<div
			role="presentation"
			className={classes.list}
			onClick={toggleMenu}
		>
			<List>
				{['One', 'Two', 'Three'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index === 0 ? <TimerIcon/> : index === 1 ? <RotateRightIcon/> : <DateRangeIcon/> }</ListItemIcon>
						<ListItemText primary={text}/>
					</ListItem>
				))}
			</List>
			<Divider/>
			<List>
				{['Four', 'Five', 'Six'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index === 0 ? <ClearIcon color="secondary"/> : index === 1 ? <LocationOnIcon/> : <SearchIcon/> }</ListItemIcon>
						<ListItemText primary={text}/>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<React.Fragment>
				<Drawer
					anchor="left"
					open={open}
					onClose={toggleMenu}
				>
					{/* {list} */}
					<List
						role="presentation"
						onClick={toggleMenu}
						className={classes.list}
					>
						{menuListItems}
					</List>
				</Drawer>					
			</React.Fragment>
		</div>
	);
}