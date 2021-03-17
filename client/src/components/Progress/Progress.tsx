import React from 'react';
import clsx from 'clsx';

import {
    createStyles,
    Fade,
    Step,
    StepConnector,
    StepIconProps,
    StepLabel,
    Stepper,
    makeStyles,
    Theme,
    Typography,
    withStyles,
    useTheme,
} from '@material-ui/core';

import {
    Check as CheckIcon,
} from '@material-ui/icons';

import { Zustand } from '../../Zustand';

const CustomConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 20,
        width: 'auto',
    },
    active: {
        '& $line': {
            backgroundColor: theme.palette.text.primary,
        },
    },
    completed: {
        '& $line': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.text.primary,
        transition: '1s',
    },
}))(StepConnector);

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: theme.palette.primary.main,
            zIndex: 1,
            color: theme.palette.text.secondary,
            width: 40,
            height: 40,
            borderRadius: '50%',
            borderColor: theme.palette.secondary.main,
            border: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
            transition: theme.transitions.duration.enteringScreen.toString(),
        },
        active: {
            //backgroundColor: theme.palette.text.secondary,
            borderStyle: 'solid',
            boxShadow: '0 4px 10px 0 rgba(0,255,0,.25)',
        },
        completed: {
            backgroundColor: theme.palette.secondary.main,
            borderStyle: 'none',
        },
        stepper: {
            backgroundColor: 'transparent',
        }
    }),
);

function getStepNames() {
    return ([
        'Intro',
        'Generisk presentasjon',
        'Tilpasset presentasjon',
        'Hva skjer når du er ansatt?',
        'Har du alt du trenger av kontoer?',
        'Noe motiverende for første dagen!',
        'Outro']
    );
};

function CustomStepIcon({active, completed}: StepIconProps) {
    const classes = useStyles();
    const timeout = useTheme().transitions.duration.standard;
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed,})}>
            <Fade in={completed} timeout={timeout}>
            {completed ? <CheckIcon fontSize="large"/> : <div/>}
            </Fade>
        </div>
    );
};

export default function SessionProgress(props: any) {
    const currentStep = Zustand.useGlobalState((state: any) => state.currentStep); 
    const classes = useStyles();
    const steps = getStepNames();

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={currentStep}
                connector={<CustomConnector/>}
                className={classes.stepper}
                {...props}
                >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={CustomStepIcon}>
                            <Typography color="textPrimary" variant="caption" style={{ userSelect: 'none'}}>
                                {label}
                            </Typography>
                        </StepLabel>
                    </Step>))}
            </Stepper>
        </React.Fragment>
    );
};