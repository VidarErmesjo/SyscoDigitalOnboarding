import React from 'react';

import {
    Typography,
    useTheme
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import StepByStep from './StepByStep';

export default function Part3() {
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
            <animated.div style={style}>
                {/* <StepByStep/> */}
                <FrequentlyAskedQuestions/>
            </animated.div>
        </React.Fragment>
    );
};