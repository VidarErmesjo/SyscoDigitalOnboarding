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
} from '@material-ui/core';

import {
    Check as CheckIcon,
} from '@material-ui/icons';

import { SessionContext } from '../../SessionProvider';

const CustomConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 20,
    },
    active: {
        '& $line': {
            backgroundColor: theme.palette.text.primary,
        },
    },
    completed: {
        '& $line': {
            backgroundColor: theme.palette.text.primary,
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.text.primary,
    },
}))(StepConnector);

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.light,
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
            transition: '1s',
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

function CustomStepIcon(props: StepIconProps) {
    const { active, completed } = props;
    const classes = useStyles();
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed,})}>
            {props.completed === true ? <CheckIcon fontSize="large"/> : null }
        </div>
    );
}

export default function SessionProgress({...rest}) {
    const classes = useStyles();
    const steps = getStepNames();
    const { activeStep } = React.useContext(SessionContext);

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<CustomConnector/>}
                className={classes.stepper}
                {...rest}
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