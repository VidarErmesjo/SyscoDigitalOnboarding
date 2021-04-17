import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    useTheme,
    Theme,
    Typography
} from '@material-ui/core';

import {
    Input as InputIcon
} from '@material-ui/icons';

import { useSpring, animated } from 'react-spring';

import { useWindowSize } from './../../components/Dashboard/Dashboard';

import SignupForm from './SignupForm';
import Wave from './Wave';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        center: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
	}),
);

export default function Signup(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    const [width, height] = useWindowSize();

    return (
        <React.Fragment>
            <animated.div
                style={style}
                {...props}
                >
                <Wave/>
                <Box className={classes.center}>
                    <Typography
                        variant="h3"
                        color="textPrimary"
                        style={{ userSelect: 'none' }}
                        >
                        <InputIcon
                            color="secondary"
                            fontSize="large"
                            style={{ marginRight: theme.spacing(2)}}
                        />
                        Velkommen til SYSCO Digital Onboarding
                    </Typography>
                    <Box
                        marginY={theme.spacing(1)}
                        textAlign="left"
                        >
                        <Typography
                            variant="body1" 
                            color="textPrimary"
                            style={{ userSelect: 'none' }}
                            >
                            Du skal nå igjennom en Onboarding-prosess.
                            Du vil få vite det meste du trenger å vite før første dag på jobb.
                            Hva slags verktøy som brukes i SYSCO, hva rutinene ved ansettelse er, og ikke minst hva slags verdier SYSCO står for.
                            Vi vil også opprette flere brukerkontoer for deg.
                            Vi som har laget denne webapplikasjonen håper den er til god hjelp, og vi ønsker deg lykke til i ny jobb.
                        </Typography>
                    </Box>
                    <SignupForm/>
                </Box>
            </animated.div>
        </React.Fragment>
    );
}