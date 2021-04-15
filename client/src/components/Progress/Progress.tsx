import React from 'react';
import clsx from 'clsx';

// Material UI
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

// Ikoner
import {
    Check as CheckIcon,
} from '@material-ui/icons';

// Animasjon
import { useSpring, animated } from 'react-spring';

// Route
import { useHistory } from 'react-router-dom';

import { Zustand, steps } from '../../Zustand';
import { getActiveStep } from '../Content/Content';

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
    const store = Zustand.useStore(); 
    const classes = useStyles();

    // Endre på layout når bredden blir for liten.
    const constricted = useMediaQuery('(max-width:666px)');

    const history = useHistory();
    function handleOnClick(index: number) {
        // Mer ...
        history.push(getActiveStep(index));
    };

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={store.currentStep}
                connector={<CustomConnector/>}
                className={classes.stepper}
                {...props}
                >
                {steps.map((label: string, index: number) => (
                    <Step key={index}>
                        <StepLabel
                            StepIconComponent={CustomStepIcon}
                            onClick={() => handleOnClick(index)}
                            >                            
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