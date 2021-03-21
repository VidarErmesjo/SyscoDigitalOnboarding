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
            //position: 'absolute',
            //top: 0,
            //left: '50%',
            //transform: `translateY(-50%)`,
        },
        text: {
            //fontFamily: theme.typography.fontFamily,
            //fontWeight: 230,
            fill: theme.palette.text.primary,
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
                    <svg width="100%" height="100%"
                        viewBox="0 0 300 100"
                        fill={theme.palette.text.primary}
                        >
                        <text
                            //textAnchor="middle"
                            className={classes.text}
                            x={0}
                            y={theme.typography.fontSize}
                            textLength={theme.typography.fontFamily}
                            >
                            {[...new Array(666)].map(() => `Intro.`).join('\n')}
                        </text>
                        <ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
                    </svg>
                    {/* <Typography color="textPrimary">
                        {[...new Array(666)]
                            .map(
                            () => `Intro.`,
                            ).join('\n')}
                    </Typography> */}
                </div>
            </animated.div>
        </React.Fragment>
    );
};