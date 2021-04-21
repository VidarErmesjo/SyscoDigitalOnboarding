import React from "react";

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

import { Zustand } from '../../Zustand';

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

//const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
function Fade(props: FadeProps) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
        if (open && onEnter) {
            onEnter();
        }
        },
        onRest: () => {
        if (!open && onExited) {
            onExited();
        }
        },
    });

    return (
        <animated.div
            //ref={ref} 
            style={style} {...other}>
            {children}
        </animated.div>
    );
};

const CustomTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(12),
	},
}))(Tooltip);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		iconButton: {
			transition: theme.transitions.duration.standard + 'ms',
		},
    })
);

export default function SessionButton(props: any) {
    const [user, signOut] = Zustand.useStore((state: any) => [
		state.user,
		state.signOut
	]);

    const classes = useStyles();

    const theme = useTheme();
   
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: user ? 1 : 0 },
		config: { duration: theme.transitions.duration.enteringScreen }
	});

    return (
        <React.Fragment>
            {user && <animated.div
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
        </React.Fragment>
    );
}