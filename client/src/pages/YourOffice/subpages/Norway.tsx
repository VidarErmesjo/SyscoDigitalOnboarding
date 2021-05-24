import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

import { Zustand } from './../../../store';

import NorwayMap from './NorwayMap';

import { GeoMarkerIcon } from '../../../components/Icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        marker: {
            position: 'absolute',
            color: theme.palette.error.main,
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.error.dark,
                transform: `scale(1.5) translateY(-10px)`,
                zIndex: theme.zIndex.mobileStepper,

            },
        },
        markerTitle: {
            position: 'absolute',
            top: -25,
            left: '50%',
            textShadow: `-2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000`,
            transform: `translateX(-50%)`,
            fontWeight: theme.typography.fontWeightBold,
            zIndex: theme.zIndex.mobileStepper,
        },
    })
);

interface IMarkers {
    offset: [number, number];
    title: string;
}

const markers: IMarkers[] = [
    {
        offset: [125, 190],
        title: "Bergen",
    },
    {
        offset: [220, 205],
        title: "Stord",
    },
    {
        offset: [250, 230],
        title: "Ølen",
    },
    {
        offset: [280, 190],
        title: "Haugesund",
    },
    {
        offset: [195, 660],
        title: "Oslo",
    },
    {
        offset: [360, 225],
        title: "Stavanger",
    },
]

function Markers() {
    const [currentStep, getPages, gotoStep] = Zustand.useStore(state => [
        state.currentStep,
        state.getPages,
        state.gotoStep
    ])
    const pages = getPages();
    const classes = useStyles();

    const handleOnClick = (marker: IMarkers) => {
        const page = pages.find(({ title }) => title === marker.title);
        const step = pages.indexOf(page!);
        gotoStep(step === -1 ? currentStep : step);
    }

    return (
        <React.Fragment>
            {markers.map((marker, index) => (
                <span
                    key={index}
                    onClick={() => handleOnClick(marker)}
                    className={classes.marker}
                    style={{
                        top: marker.offset[0],
                        left: marker.offset[1],
                    }}
                    >
                    <GeoMarkerIcon className={classes.marker}/>
                    <Typography
                        color="textPrimary"
                        variant="subtitle1"
                        className={classes.markerTitle}
                        >
                        {marker.title}
                    </Typography>
                </span>
            ))}
        </React.Fragment>
    );
}

export default function Norway() {
    const classes = useStyles();

    const Component = () => {
        return (
            <div style={{ transform: `scale(1)`}}>         
                <NorwayMap/>
                <Markers/>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div id="kart" className={classes.root}>
                <Component/>
            </div>
        </React.Fragment>
    );
}