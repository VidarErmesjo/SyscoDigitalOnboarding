import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import NorwayMap from './NorwayMap';

import { GeoMarkerIcon } from '../../../components/icons';

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
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.error.light,
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
        offset: [280, 190],
        title: "Haugesund",
    },
    {
        offset: [250, 230],
        title: "Ølen",
    },
    {
        offset: [195, 660],
        title: "Oslo",
    },
    {
        offset: [360, 225],
        title: "Stavanger",
    },
    {
        offset: [220, 205],
        title: "Stord",
    },
]

function Markers() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            {markers.map((marker, index) => (
                <span
                    key={index}
                    onClick={() => alert(`Du har trykka på ${marker.title}. Var det så snilt av deg?`)}
                    className={classes.marker}
                    style={{
                        top: marker.offset[0],
                        left: marker.offset[1],
                    }}
                    >
                    <GeoMarkerIcon color="error"/>
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

function Component() {
    return (
        <div style={{ transform: `scale(1)`}}>         
            <NorwayMap/>
            <Markers/>
        </div>
    );
}

export default function Norway() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div id="kart" className={classes.root} style={props}><Component/></div>}
            </Spring>
        </React.Fragment>
    );
}