import React from 'react';
import {
    Fade,
    Typography,
} from '@material-ui/core';

export default function Part4() {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Typography color="textPrimary">Part4</Typography>
            </Fade>
        </React.Fragment>
    );
};