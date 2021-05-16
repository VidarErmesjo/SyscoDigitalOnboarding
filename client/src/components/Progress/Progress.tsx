import React from 'react';
import clsx from 'clsx';
import {
    createStyles,
    Step,
    StepConnector,
    StepIconProps,
    StepLabel,
    Stepper,
    SvgIcon,
    SvgIconProps,
    makeStyles,
    Theme,
    Typography,
    withStyles,
    useTheme,
} from '@material-ui/core';

import { Zustand } from './../../store';
import shallow from 'zustand/shallow';

const CustomConnector = withStyles((theme: Theme) => ({
    alternativeLabel: {
        top: `calc(50% - 21.5px)`,
        left: `calc(-50% + 30px)`,
        right: `calc(50% + 30px)`,
        width: 'auto',
    },
    active: {
        '& $line': {
            backgroundColor: theme.palette.text.primary,
            boxShadow: `0em 0em 0.25em 0.25em ${theme.palette.secondary.main}`,
        },
    },
    completed: {
        '& $line': {
            boxShadow: `0em 0em 0.25em 0.25em ${theme.palette.primary.main}`,
        },
    },
    line: {
        height: theme.typography.pxToRem(9),
        border: 0,
        boxShadow: `0em 0em 0.25em 0.25em ${theme.palette.primary.main}`,
        borderRadius: '0.25em',
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
            width: 40,
            height: 40,
            borderRadius: '50%',
            borderColor: theme.palette.primary.main,
            borderStyle: 'solid',
            border: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            borderColor: theme.palette.secondary.main,
            borderStyle: 'solid',
            boxShadow: `0em 0em 0.25em 0.25em ${theme.palette.primary.light}`,
        },
        completed: {
            backgroundColor: theme.palette.secondary.main,
            borderStyle: 'none',
            boxShadow: `0em 0em 0.25em 0.25em ${theme.palette.primary.main}`,
        },
        /*error: {
            borderColor: theme.palette.background.paper,// theme.palette.secondary.light,
            borderStyle: 'solid',
            boxShadow: `0em 0em 0.25em 0.25em ${theme.palette.secondary.main}`,
        },*/
        stepper: {
            backgroundColor: 'transparent',
        },
    }),
);

function SyscoCompletedIcon({color, ...props}: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fontSize="large"
            viewBox="0 0 77 77"
            {...props}
            >
            <path
                fill={theme.palette.primary.main}
                fillRule="evenodd"
                d="M62.657 24.732a5.716 5.716 0 10-9.714-6.03l-16.27 26.212-12.866-11.72a6.458 6.458 0 00-8.698 9.55l16.582 15.103c.408.372.852.682 1.318.93a5.716 5.716 0 009.054-.868l20.594-33.177z"
                clipRule="evenodd"
            />
        </SvgIcon>
    );
}

function SyscoStepIcon({active, completed, error}: StepIconProps): JSX.Element {
    const classes = useStyles();

    return (
        <span className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
            //[classes.active]: error,
            })}>
            {(completed) && <SyscoCompletedIcon/>}
        </span>
    );
}

export default function Progress() {
    const [currentStep, getPagesByCategory, calculateActiveStep] = Zustand.useStore(state => [
        state.currentStep,
        state.getPagesByCategory,
        state.calculateActiveStep
    ], shallow);
    
    const classes = useStyles();

    const pages = React.useMemo(() => getPagesByCategory(), [currentStep]);

    const activeStep = React.useMemo(() => calculateActiveStep(), [currentStep]);

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<CustomConnector/>}
                className={classes.stepper}
                nonLinear
                >
                {pages.filter((item) => !item.isChild).map((page, index) => <Step
                    key={index}
                    active={page.active}
                    completed={page.active ? false : page.completed}
                    >
                    <StepLabel
                        StepIconComponent={SyscoStepIcon}
                        error={page.active && page.completed}
                        >                            
                        <Typography
                            color="textPrimary"
                            variant="caption"
                            style={{ userSelect: 'none'}}
                            >
                            {page.title}
                        </Typography>
                    </StepLabel>                       
                </Step>)}
            </Stepper>
        </React.Fragment>
    );
}