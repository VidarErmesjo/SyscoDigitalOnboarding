import React from 'react';
import clsx from 'clsx';

// Material UI
import {
    createStyles,
    IconButton,
    LinearProgress,
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

import { StepperIcon } from './../Icons';

// Animasjon
import { useSpring, animated } from 'react-spring';

// Route
import { useHistory } from 'react-router-dom';

import { Zustand, steps } from '../../Zustand';
import { getActiveStep } from '../Content/Content';

const CustomConnector = withStyles((theme: Theme) => ({
    alternativeLabel: {
        top: 30,
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
        height: 4,
        border: 0,
        backgroundColor: theme.palette.text.primary,
        transition: theme.transitions.duration.standard + 'ms',
    },
}))(StepConnector);

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.primary.main,
            zIndex: 1,
            width: 40,
            height: 40,
            borderRadius: '50%',
            //borderColor: theme.palette.primary.main,
            //border: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
            transition: theme.transitions.duration.enteringScreen + 'ms',
        },
        active: {
            borderColor: 'transparent',// theme.palette.secondary.main,
            //borderStyle: 'solid',
            //boxShadow: '0 4px 10px 0 rgba(0,255,0,.25)',
        },
        completed: {
            backgroundColor: 'transparent',// theme.palette.secondary.main,
            borderStyle: 'none',
        },
        stepper: {
            backgroundColor: 'transparent',
        },
        linearProgress: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.4,
            borderRadius: 4,
        },
    }),
);

function CustomStepIcon({active, completed, ...props}: StepIconProps) {
    const theme = useTheme();
  
    return (
        <IconButton color="secondary">
            <StepperIcon active={active} completed={completed}/>
        </IconButton>
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
                //connector={null}
                connector={<CustomConnector/>}
                //connector={<LinearProgress color="secondary" variant="determinate" value={66}className={classes.linearProgress}/>}
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