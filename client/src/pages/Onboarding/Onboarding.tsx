import React from 'react';
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';


import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import StepByStep from './StepByStep';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            transform: `translate(-50%, -50%)`,
        },
    })
);

export default function Onboarding() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div style={props} className={classes.root}>
                    {/* <StepByStep/> */}
                <FrequentlyAskedQuestions/>
                </div>}
            </Spring>
        </React.Fragment>
    );
};