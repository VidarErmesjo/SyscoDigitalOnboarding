import React from 'react';

import {
    createStyles,
    makeStyles,
    Typography,
    useTheme,
    Theme
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

// Video?
// https://www.youtube.com/watch?v=oSY89RSi8UU&ab_channel=Syscoway

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        text: {
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            userSelect: 'none',
        },
    })
);

export default function Intro(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
             <animated.div style={style}>
                <div className={classes.root}>
                    <svg
                        width="80vw"
                        //height="100%"
                        //viewBox="0 0 200 200"
                        fill={theme.palette.text.primary}
                        >
                        <text
                            x={0}
                            y={theme.typography.fontSize}
                            className={classes.text}
                            >
                            {[...new Array(666)].map(() => `Intro.`).join('\n')}
                        </text>
                        <ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
                    </svg>
                </div>
            </animated.div>
        </React.Fragment>
    );
};