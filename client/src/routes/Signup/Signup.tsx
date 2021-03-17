import React from 'react';

import {
    Box,
    Fade,
    useTheme,
    Typography
} from '@material-ui/core';

import {
    Input as InputIcon
} from '@material-ui/icons';

import { Zustand } from '../../Zustand';
import SignupForm from './SignupForm';

export default function Signup() {
    const user = Zustand.useGlobalState((state: any) => state.user);
    const theme = useTheme();
    const timeout = theme.transitions.duration.enteringScreen;

    return (
        <React.Fragment>
            <Box
                marginTop={theme.spacing(2)}
                marginBottom={theme.spacing(1)}
                >
                <Fade in={!user} timeout={timeout}>
                    <Typography variant="h3" color="textPrimary">
                        <InputIcon
                            color="secondary"
                            fontSize="large"
                            style={{ marginRight: theme.spacing(1)}}
                            />
                        Velkommen til SYSCO Digital Onboarding
                    </Typography>
                </Fade>
            </Box>        
            <Box
                marginX={theme.spacing(5)}
                textAlign="left"
                >
                <Fade in={!user} timeout={timeout}>
                    <Typography variant="body1" color="textPrimary">
        Du skal nå igjennom en Onboarding-prosess.
        Du vil få vite det meste du trenger å vite før første dag på jobb.
        Hva slags verktøy som brukes i SYSCO, hva rutinene ved ansettelse er, og ikke minst hva slags verdier SYSCO står for.
        Vi vil også opprette flere brukerkontoer for deg.
        Vi som har laget denne webapplikasjonen håper den er til god hjelp, og vi ønsker deg lykke til i ny jobb.
                    </Typography>
                </Fade>
            </Box>

            <Box
                textAlign="center"
                justifyContent="center"
                >
                <Fade in={!user} timeout={timeout}>
                    <SignupForm/>
                </Fade>
            </Box>
        </React.Fragment>
    );
};