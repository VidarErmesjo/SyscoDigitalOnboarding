import React from 'react';
import {
    Fade,
    Typography,
    useTheme
} from '@material-ui/core';

export default function Part1() {
    const timeout = useTheme().transitions.duration.enteringScreen;

    return (
        <React.Fragment>
            <Fade in={true} timeout={timeout}>
                <Typography color="textPrimary">Part1</Typography>
            </Fade>
        </React.Fragment>
    );
};