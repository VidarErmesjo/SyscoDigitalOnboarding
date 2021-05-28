import React from "react";

import {
    createStyles,
    IconButton,
    makeStyles,
    Theme
} from '@material-ui/core';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    ZoomIn as ZoomInIcon,
    ZoomOut as ZoomOutIcon
} from '@material-ui/icons';

import shallow from 'zustand/shallow';
import { Zustand } from '../../store';

const chevronSize = 100;
const zoomSize = 100;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        chevron: {
            fontSize: theme.typography.pxToRem(chevronSize),
            zIndex: theme.zIndex.mobileStepper,
        },
        iconButton: {
            position: 'fixed',
            top: '50%',
            marginTop: theme.typography.pxToRem(-chevronSize * 0.5),
            transition: theme.transitions.duration.short + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
            },
        },
        zoom: {
            fontSize: theme.typography.pxToRem(zoomSize),
            zIndex: theme.zIndex.mobileStepper,
        },
        zoomButton: {
            position: 'fixed',
            right: 0,
            marginTop: theme.typography.pxToRem(-zoomSize * 0.5),
            transition: theme.transitions.duration.short + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
            },
        },
	}),
);

export default function Controls() {
    const [
        isLoading,
        currentStep,
        totalSteps,
        nextStep,
        previousStep,
        zoomIn,
        zoomOut,
        getCurrentPage
    ] = Zustand.useStore(state => [
        state.isLoading,
        state.currentStep,
        state.totalSteps,
        state.nextStep,
        state.previousStep,
        state.zoomIn,
        state.zoomOut,
        state.getCurrentPage
    ], shallow);

    const classes = useStyles();
    const page = React.useMemo(() => getCurrentPage(), [currentStep, getCurrentPage]);

    /*document.addEventListener('keydown', function(event) {
        if(event.key === "ArrowLeft") {
            previousStep();
        }
        else if(event.key === "ArrowRight") {
            nextStep();
        }
        else if(event.key === "ArrowUp") {
            zoomIn(0.005);
        }
        else if(event.key === "ArrowDown") {
            zoomOut(0.005);
        }
    })*/

    const restrict = page.id === "kart";

    const Navigation = () => <React.Fragment>
            <IconButton
                color="secondary"
                onClick={previousStep}
                disabled={currentStep! < 1
                    ? true
                    : false
                    || isLoading}
                className={classes.iconButton}
                style={{ left: 0 }}
                >
                <ChevronLeftIcon color="inherit" className={classes.chevron}/>
            </IconButton>
            <IconButton
                color="secondary"
                onClick={nextStep}
                disabled={currentStep! >= totalSteps!
                    ? true
                    : false
                    || isLoading || restrict}
                className={classes.iconButton}
                style={{ right: 0 }}
                >
                <ChevronRightIcon color="inherit" className={classes.chevron}/>
            </IconButton>
    </React.Fragment>

    const Zoom = () => <React.Fragment>
        <IconButton
            color="secondary"
            onClick={() => zoomIn(0.05)}
            className={classes.zoomButton}
            style={{ top: "15%" }}
            >
            <ZoomInIcon color="inherit" className={classes.zoom}/>
        </IconButton>
        <IconButton
            color="secondary"
            onClick={() => zoomOut(0.05)}
            className={classes.zoomButton}
            style={{ top: "30%" }}
            >
            <ZoomOutIcon color="inherit" className={classes.zoom}/>
        </IconButton>
    </React.Fragment>

    return (
        <React.Fragment>
            <Navigation/>
            <Zoom/>
        </React.Fragment>
    );
}