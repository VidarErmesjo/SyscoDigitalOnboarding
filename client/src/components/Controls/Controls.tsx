import React from "react";

import {
    createStyles,
    IconButton,
    makeStyles,
    Theme
} from '@material-ui/core';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import { Zustand } from './../../Zustand';

const chevronSize = 100;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        chevron: {
            color: theme.palette.secondary.main,
            fontSize: theme.typography.pxToRem(chevronSize),
            transition: theme.transitions.duration.short + 'ms',
            zIndex: theme.zIndex.mobileStepper,
            '&:hover': {
                color: theme.palette.text.primary,
            },
        },
        constrictedChevron: {
            fontSize: theme.typography.pxToRem(chevronSize * 0.5),
        },
        iconButton: {
            position: 'fixed',
            top: '50%',
            marginTop: theme.typography.pxToRem(-chevronSize * 0.5),
            width: theme.typography.pxToRem(chevronSize),
            height: theme.typography.pxToRem(chevronSize),
        },
	}),
);

export default function Controls(props: any) {
    const [isLoading, currentStep, totalSteps, nextStep, previousStep] = Zustand.useStore((state: any) => [
        state.isLoading,
        state.currentStep,
        state.totalStep,
        state.nextStep,
        state.previousStep
    ]);
    const classes = useStyles();

    return (
        <React.Fragment>
            <IconButton
                color="secondary"
                onClick={previousStep}
                disabled={currentStep < 1
                    ? true
                    : false
                    || isLoading}
                className={classes.iconButton}
                style={{ left: 0 }}
                >
                <ChevronLeftIcon className={classes.chevron}/>
            </IconButton>
            <IconButton
                color="secondary"
                onClick={nextStep}
                disabled={currentStep > totalSteps - 1
                    ? true
                    : false
                    || isLoading}
                className={classes.iconButton}
                style={{ right: 0 }}
                >
                <ChevronRightIcon className={classes.chevron}/>
            </IconButton>
        </React.Fragment>
    );
}