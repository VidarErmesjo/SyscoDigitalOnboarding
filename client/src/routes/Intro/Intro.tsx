import React from 'react';

import {
    Fade,
    Typography,
    useTheme
} from '@material-ui/core';
// Video?
// https://www.youtube.com/watch?v=oSY89RSi8UU&ab_channel=Syscoway

export default function Intro(props: any) {
    const timeout = useTheme().transitions.duration.enteringScreen;

    return (
        <React.Fragment>
            <Fade in={true} timeout={timeout}>
                {/* <video src="https://www.youtube.com/watch?v=oSY89RSi8UU&ab_channel=Syscoway"></video> */}
                <Typography color="textPrimary">Intro</Typography>
            </Fade>
        </React.Fragment>
    );
};