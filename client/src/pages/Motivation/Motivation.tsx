import React from 'react';
import { useTheme } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';

import Social from './Social';

export default function Motivation() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div style={props}><Social/></div>}
            </Spring>
        </React.Fragment>
    );
}