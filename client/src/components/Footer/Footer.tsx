import React from 'react';
import clsx from 'clsx';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    useMediaQuery,
    useTheme
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

import { Zustand } from '../../Zustand';
import { Progress } from '../Progress';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'fixed',
            bottom: 0,
			width: '100%',
            height: theme.spacing(17),
			zIndex: 100,
            backgroundColor: theme.palette.background.default,
		},
        constricted: {
            height: theme.spacing(11),
        },
    })
);

export default function Footer(props: any) {
    const user = Zustand.useStore((state: any) => state.user);
    const classes = useStyles();
    const theme = useTheme();
    const constricted = useMediaQuery('(max-width:666px)');

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: user ? 1 : 0 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
            <footer className={clsx(classes.root, {[classes.constricted]: constricted})}>
                <animated.div
                    style={style}
                    {...props}
                    >
                    <Progress/>
                </animated.div>
            </footer>
        </React.Fragment>
    );
}