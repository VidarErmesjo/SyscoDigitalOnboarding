import React from 'react';
import {
    Fade,
    Typography,
} from '@material-ui/core';

export default function Part5() {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Typography color="textPrimary">Part5</Typography>
            </Fade>
        </React.Fragment>
    );
};