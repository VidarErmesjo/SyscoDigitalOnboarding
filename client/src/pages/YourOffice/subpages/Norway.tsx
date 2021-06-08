import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

import { Zustand } from './../../../store';

import NorwayMap from './NorwayMap';

import { GeoMarkerIcon } from 'components/Icons';

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
    id: string;
}

const markers: IMarkers[] = [
    {
        offset: [125, 190],
        title: "Bergen",
        id: "bergen-kontoret",
    },
    {
        offset: [220, 205],
        title: "Stord",
        id: "stord-kontoret",
    },
    {
        offset: [250, 230],
        title: "Ølen",
        id: "ølen-kontoret",
    },
    {
        offset: [280, 190],
        title: "Haugesund",
        id: "haugesund-kontoret",
    },
    {
        offset: [195, 660],
        title: "Oslo",
        id: "oslo-kontoret",
    },
    {
        offset: [360, 225],
        title: "Stavanger",
        id: "stavanger-kontoret"
    },
]

function Markers() {
    const [currentStep, getPage, getPages, gotoStep] = Zustand.useStore(state => [
        state.currentStep,
        state.getPage,
        state.getPages,
        state.gotoStep
    ])
    const pages = getPages();
    const classes = useStyles();

    const handleOnClick = (marker: IMarkers) => {
        // Finn id til valgt filial.
        const step = pages.indexOf(pages.find(({ id }) => id === marker.id)!);
        if(step === -1) {
            console.log("Error: Could not find page");
            return;
        }

        // Skru av kart og skru på filialsider.
        const map = getPage(currentStep);
        const parent = getPage(step);
        const child = getPage(step + 1);
        map.disabled = true;
        parent.disabled = false;
        child.disabled = false;
        gotoStep(step);
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
            <div>         
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