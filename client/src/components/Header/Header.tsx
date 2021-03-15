import React from 'react';
import {
	Box,
	createStyles,
	Fade,
	IconButton,
	makeStyles,
	useTheme,
	Theme,
	Tooltip,
    Typography,
	withStyles
} from '@material-ui/core';
 
import {
	AccountCircle as AccountCircleIcon,
  } from '@material-ui/icons';

import logo from './../../assets/SYSCO_logo_white_RGB.png';

import { Zustand } from '../../Zustand';

const CustomTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(12),
	},
}))(Tooltip);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logo: {
			width: window.screen.availWidth * 0.1,
			height: (361 * window.screen.availWidth / 1745) * 0.1,
			maxHeight: 'fill-available',
			marginTop: theme.spacing(1.5),
			marginRight: theme.spacing(1.5),
		},
    })
);

export default function Header(props: any) {
	const [user, signOut] = Zustand.useSessionStore((state: any) => [
		state.user,
		state.signOut
	]);
	const classes = useStyles();
	const theme = useTheme();
	const timeout = 1000;

	return (
		<React.Fragment>
			<Fade
				in={user !== null}
				timeout={timeout}
				{...props}
				>
				<Box
					position="absolute"
					top={0}
					left={0}
					marginLeft={theme.spacing(0.05)}
					marginTop={theme.spacing(0.05)}
					{...props}
					>
					<CustomTooltip
						title={
							<React.Fragment>
								<Typography variant="caption">Avslutt Onboarding</Typography>
						 	</React.Fragment>
						}
						{...props}
						>
						<IconButton onClick={signOut}>
							<AccountCircleIcon color="secondary"/>
						</IconButton>
					</CustomTooltip>
					<Typography variant="caption" color="textPrimary">{user}</Typography>
				</Box>
			</Fade>
			<Fade
				in={true}
				timeout={timeout*3}
				{...props}
				>
				<Box
					position="absolute"
					top={0} 
					right={0}
					>
					<img src={logo} alt="SYSCO logo" className={classes.logo}/>
				</Box>
			</Fade>
		</React.Fragment>
	);
}