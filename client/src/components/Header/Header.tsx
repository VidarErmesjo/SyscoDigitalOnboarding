import React from 'react';
import {
	Box,
	createStyles,
	Fade,
	Grid,
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

import { SessionContext } from '../../SessionProvider';

const CustomTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(12),
	},
}))(Tooltip);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		icon: {
			maxHeight: 'fill-available',
		},
		logo: {
			width: window.innerWidth * 0.1,
			height: 361 * window.innerWidth / 1745 * 0.1,
			maxHeight: 'fill-available',
			marginTop: theme.spacing(1.5),
			marginRight: theme.spacing(1.5),
		},
    })
);
export default function Header() {
	const { user, signOut } = React.useContext(SessionContext);
	const classes = useStyles();
	const theme = useTheme();
	const timeout = 1000;

	return (
		<React.Fragment>
			<Fade
				in={user}
				timeout={timeout}
				>
				<Box
					position="absolute"
					textAlign="left"
					marginLeft={theme.spacing(0.05)}
					marginTop={theme.spacing(0.05)}
					>
					<CustomTooltip
						title={
							<React.Fragment>
								<Typography variant="caption">Start ny Onboarding</Typography>
							</React.Fragment>
						}
						>
						<IconButton onClick={signOut} className={classes.icon}>
							<AccountCircleIcon color="secondary"/>
						</IconButton>
					</CustomTooltip>
				</Box>
			</Fade>
			<Fade in={true} timeout={timeout}>
				<Box
					textAlign="right"
					>
					<img src={logo} alt="SYSCO logo" className={classes.logo}/>
				</Box>
			</Fade>
		</React.Fragment>
	);
}