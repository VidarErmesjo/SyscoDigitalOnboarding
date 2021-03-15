import React from 'react';
import clsx from 'clsx';

import {
    createStyles,
    Step,
    StepConnector,
    StepIconProps,
    StepLabel,
    Stepper,
    makeStyles,
    Theme,
    Typography,
    withStyles,
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
            backgroundColor: theme.palette.primary.main,
            zIndex: 1,
            color: theme.palette.text.secondary,
            width: 40,
            height: 40,
            display: 'flex',
            borderRadius: '50%',
            borderColor: theme.palette.secondary.main,
            border: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '2s',
        },
        active: {
            backgroundColor: theme.palette.text.secondary,
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
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed,})}>
            {completed && <CheckIcon fontSize="large" style={{ transition: '1s'}}/>}
        </div>
    );
};

export default function SessionProgress(props: any) {
    const classes = useStyles();
    const steps = getStepNames();
    const currentStep = Zustand.useSessionStore((state: any) => state.currentStep); 

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