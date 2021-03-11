import React from 'react';
import {
	Box,
	Fade,
	IconButton,
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

import { SessionContext } from './../../SessionContext';

const CustomTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(12),
	},
}))(Tooltip);

export default function Header() {
	const { session, user, resetSession  } = React.useContext(SessionContext);
	const theme = useTheme();
	const spacing = 0.25;
	const timeout = 1000;

	return (
		<React.Fragment>
			<Box
				position="absolute"
				textAlign="left"
				marginLeft={theme.spacing(spacing-0.15)}
				marginTop={theme.spacing(spacing-0.2)}
				>
				<Fade
					in={session}
					timeout={timeout}
					>
					<CustomTooltip
						title={
							<React.Fragment>
								<Typography variant="caption">Start ny Onboarding</Typography>
							</React.Fragment>
						}
						>
						<IconButton onClick={resetSession}>
							<AccountCircleIcon color="secondary"/>
						</IconButton>
					</CustomTooltip>
				</Fade>
				<Fade in={session} timeout={timeout}>
					<Typography
						color="textPrimary"
						variant="caption"
						style={{ userSelect: 'none' }}
						>
						{user}
					</Typography>
				</Fade>
			</Box>
			<Box
				textAlign="right"
				marginTop={theme.spacing(spacing - 0.05)}
				marginRight={theme.spacing(spacing)}
				>
				<Fade in={true} timeout={timeout*5}>
				<img src={logo} alt="SYSCO logo" width="10%"/>
				</Fade>
				{/* <Typography
					variant="h3"
					color="textPrimary"
					style={{ userSelect: 'none' }}
					>
					SYSCO
				</Typography> */}
			</Box>
		</React.Fragment>
	);
}