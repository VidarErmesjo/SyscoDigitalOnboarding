import React from 'react';

import {
    Container,
    Fade,
    Typography,
    useTheme
} from '@material-ui/core';

export default function Part1() {
    const timeout = useTheme().transitions.duration.enteringScreen;

    return (
        <React.Fragment>
            <Fade in={true} timeout={timeout}>
                <Container fixed maxWidth="lg">
                    <Typography color="textPrimary">
                        {[...new Array(12)]
                            .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            ).join('\n')}
                    </Typography>
                </Container>
            </Fade>
        </React.Fragment>
    );
};