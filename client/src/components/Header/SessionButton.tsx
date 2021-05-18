import React from "react";

import {
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

import { Spring } from 'react-spring/renderprops';

import shallow from 'zustand/shallow';
import { Zustand } from '../../store';

const CustomTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(12),
	},
}))(Tooltip);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        accountCircle: {
            color: theme.palette.secondary.main,
            transition: theme.transitions.duration.short + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
            },  
        },
		iconButton: {
			transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
            },  
		},
    })
);

export default function SessionButton(props: any) {
    const [user, signOut] = Zustand.useStore(state => [
		state.user,
		state.signOut
	], shallow);

    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: user ? 1 : 0 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                {...props}
                >
                {props => <span style={props}>
                    <CustomTooltip
                        title={
                            <React.Fragment>
                                <Typography
                                    variant="caption"
                                    >
                                    Avslutt Onboarding
                                </Typography>
                            </React.Fragment>
                        }
                        //TransitionComponent={Fade}
                        >
                        <IconButton 
                            onClick={signOut} 
                            color="secondary"
                            className={classes.iconButton}
                            >
                            <AccountCircleIcon color="inherit"/>
                        </IconButton>
                    </CustomTooltip>
                    <Typography
                        variant="caption"
                        color="textPrimary"
                        style={{ userSelect: 'none' }}
                        >
                        {user}
                    </Typography>
                </span>}
            </Spring>
        </React.Fragment>
    );
}