import React from 'react';

import {
    Fade,
    Typography,
} from '@material-ui/core';

export default function Intro() {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Typography color="textPrimary">Intro</Typography>
            </Fade>
        </React.Fragment>
    );
};