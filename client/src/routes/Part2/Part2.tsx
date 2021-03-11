import React from 'react';
import {
    Fade,
    Typography,
} from '@material-ui/core';

export default function Part2() {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Typography color="textPrimary">Part2</Typography>
            </Fade>
        </React.Fragment>
    );
};