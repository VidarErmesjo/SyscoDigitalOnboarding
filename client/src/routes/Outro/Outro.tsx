import React from 'react';
import {
    Fade,
    Typography,
} from '@material-ui/core';

export default function Outro() {
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Typography color="textPrimary">Outro</Typography>
            </Fade>
        </React.Fragment>
    );
};