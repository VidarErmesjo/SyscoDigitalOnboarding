import React from 'react';

import {
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import { FrequentlyAskedQuestions } from './Sponsor';
import { StepByStep } from './Accounts';

export default function Part3() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div style={props}>
                    {/* <StepByStep/> */}
                <FrequentlyAskedQuestions/>
                </div>}
            </Spring>
        </React.Fragment>
    );
};