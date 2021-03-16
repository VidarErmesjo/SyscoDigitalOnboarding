import React from 'react';

import {
    Fade,
    Typography,
} from '@material-ui/core';
// Video?
// https://www.youtube.com/watch?v=oSY89RSi8UU&ab_channel=Syscoway

export default function Intro(props: any) {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000} {...props}>
                {/* <video src="https://www.youtube.com/watch?v=oSY89RSi8UU&ab_channel=Syscoway"></video> */}
                <Typography color="textPrimary">Intro</Typography>
            </Fade>
        </React.Fragment>
    );
};