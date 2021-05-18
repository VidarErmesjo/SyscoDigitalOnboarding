import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import { Progress } from '../Progress';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'fixed',
            left: 0,
            bottom: 0,
			width: '100%',
            height: theme.spacing(14),
			zIndex: 100,
            backgroundColor: 'none',
		},
    })
);

export default function Footer() {
    // TODO: Lag tilstand som blanker ut når vi går fra en del til en annen?
    //const [isLoading] = Zustand.useStore(state => [state.isLoading]);
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <footer className={classes.root}>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ duration: theme.transitions.duration.enteringScreen }}
                    >
                    {props => <div style={props}>{true && <Progress/>}</div>}
                </Spring>
            </footer>
        </React.Fragment>
    );
}