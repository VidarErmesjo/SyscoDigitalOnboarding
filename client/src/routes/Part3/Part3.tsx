import React from 'react';
import {
    Fade,
    Typography,
    useTheme
} from '@material-ui/core';

export default function Part3() {
    const timeout = useTheme().transitions.duration.enteringScreen;

    return (
        <React.Fragment>
            <Fade in={true} timeout={timeout}>
                <Typography color="textPrimary">Part3</Typography>
            </Fade>
        </React.Fragment>
    );
};