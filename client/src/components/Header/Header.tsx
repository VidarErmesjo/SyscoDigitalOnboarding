import React from 'react';

import {
	Box,
	createStyles,
	IconButton,
	makeStyles,
	useTheme,
	Theme,
	Tooltip,
    Typography,
	withStyles,
} from '@material-ui/core';
 
import {
	AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';

import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

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
		iconButton: {
			transition: theme.transitions.duration.standard + 'ms',
		},
    })
);

export default function Header(props: any) {
	const [user, signOut] = Zustand.useGlobalState((state: any) => [
		state.user,
		state.signOut
	]);

	const ref = React.useRef(9999);
	const classes = useStyles();
	const theme = useTheme();

	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: user !== null ? 1 : 0 },
		config: { duration: theme.transitions.duration.enteringScreen }
	});

	return (
		<React.Fragment>
			{user !== null && <animated.div
				style={style}
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
					<CustomTooltip ref={ref}
						title={
							<React.Fragment>
								<Typography
									variant="caption"
									>
									Avslutt Onboarding
								</Typography>
							</React.Fragment>
						}
						>
						<IconButton 
							onClick={signOut} 
							color="secondary"
							className={classes.iconButton}
							>
							<AccountCircleIcon color="secondary"/>
						</IconButton>
					</CustomTooltip>
					<Typography
						variant="caption"
						color="textPrimary"
						style={{ userSelect: 'none' }}
						>
						{user}
					</Typography>
				</Box>
			</animated.div>}
			<Spring
				from={{ opacity: 0 }}
				to={{ opacity: 1 }}
				config={{ duration: theme.transitions.duration.enteringScreen }}
				>
				{props =>
					<Box
					position="absolute"
					top={0} 
					right={0}
					style={props}
					>
					<img
						src={logo}
						alt="SYSCO logo"
						className={classes.logo}
						style={{ userSelect: 'none' }}
					/>
				</Box>}
			</Spring>
		</React.Fragment>
	);
}