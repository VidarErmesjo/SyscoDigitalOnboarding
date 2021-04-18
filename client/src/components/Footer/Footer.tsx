import React from 'react';
import clsx from 'clsx';

import {
    createStyles,
    makeStyles,
    Theme,
    useMediaQuery,
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
            height: theme.spacing(17),
			zIndex: 100,
            backgroundColor: theme.palette.background.default,
		},
        constricted: {
            height: theme.spacing(14),
        },
    })
);

export default function Footer(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const constricted = useMediaQuery('(max-width:666px)');

    return (
        <React.Fragment>
            <footer className={clsx(classes.root, {[classes.constricted]: constricted})}>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ duration: theme.transitions.duration.enteringScreen }}
                    >
                    {props => <div style={props}><Progress/></div>}
                </Spring>
            </footer>
        </React.Fragment>
    );
}