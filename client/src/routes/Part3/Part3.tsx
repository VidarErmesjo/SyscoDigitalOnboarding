import React from 'react';
import {
    Fade,
    Typography,
} from '@material-ui/core';

export default function Part3() {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Typography color="textPrimary">Part3</Typography>
            </Fade>
        </React.Fragment>
    );
};