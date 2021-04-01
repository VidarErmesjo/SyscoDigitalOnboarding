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
    useMediaQuery,
    useTheme,
} from '@material-ui/core';

import {
    Check as CheckIcon,
} from '@material-ui/icons';

import { useSpring, animated } from 'react-spring';

import { Zustand } from '../../Zustand';

const CustomConnector = withStyles((theme: Theme) => ({
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
        transition: theme.transitions.duration.standard + 'ms',
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
            transition: theme.transitions.duration.enteringScreen + 'ms',
        },
        active: {
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
}

function CustomStepIcon({active, completed}: StepIconProps) {
    const classes = useStyles();
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: completed ? 1 : 0 },
        config: { duration: theme.transitions.duration.standard }
    });
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed,})}>
            <animated.div style={style}>
                {completed ? <CheckIcon fontSize="large"/> : <div/>}
            </animated.div>
        </div>
    );
}

export default function SessionProgress(props: any) {
    const currentStep = Zustand.useStore((state: any) => state.currentStep); 
    const classes = useStyles();
    const steps = getStepNames();

    // Endre på layout når bredden blir for liten.
    const constricted = useMediaQuery('(max-width:666px)');

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
                            {!constricted && <Typography
                                color="textPrimary"
                                variant="caption"
                                style={{ userSelect: 'none'}}
                                >
                                {label}
                            </Typography>}
                        </StepLabel>
                    </Step>))}
            </Stepper>
        </React.Fragment>
    );
}