import React from 'react';

import {
    Box,
    Button,
    createStyles,
    makeStyles,
    TextField,
    Theme,
    Typography,
} from '@material-ui/core';

import {
    Input as InputIcon,
    PlayCircleFilled as PlayCircle,
} from '@material-ui/icons';

import { SessionContext } from './../../SessionContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        form: {
            backgroundColor: theme.palette.primary.dark,
            '& > *': {
                margin: theme.spacing(5),
                width: '50ch',
            },
        },
	}),
);

export default function Login() {
    const classes = useStyles();
    const { session, startSession } = React.useContext(SessionContext);

    return (
        <React.Fragment>
            <Box
                marginX={5}
                marginBottom={5}
                >
                <Typography variant="h3"color="textPrimary">
                    <InputIcon
                        color="secondary"
                        fontSize="large"
                        style={{ marginRight: '12px'}}
                        />
                    Velkommen til SYSCO
                </Typography>
            </Box>

            <Box
                marginX={40}
                textAlign="left"
                >
                <Typography variant="body1" color="textPrimary">
    Du skal nå igjennom en Onboarding prosess.
    Du vil få vite det meste du trenger å vite før første dag på jobb.
    Hva slags verktøy som brukes i SYSCO, hva rutinene ved ansettelse er, og ikke minst hva slags verdier SYSCO står for.
    Vi vil også opprette flere brukerkontoer for deg.
    Vi som har laget denne webapplikasjonen håper den er til god hjelp, og vi ønsker deg lykke til i ny jobb.
                </Typography>
            </Box>

            <Box
                //marginX={24}
                textAlign="center"
                justifyContent="center"
                //alignItems="center"
                //alignContent="center"
                >
                <form
                    className={classes.form}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        label="SYSCO e-post"
                        variant="outlined"
                        color="secondary"
                        />
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<PlayCircle/>}
                        onClick={startSession}
                    >
                        Start
                    </Button>
                </form>
            </Box>
        </React.Fragment>
    );
};