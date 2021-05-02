import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
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
    })
);

interface IMarkers {
    offset: [number, number];
    title: string;
}

const markers: IMarkers[] = [
    {
        offset: [0, 0],
        title: "Bergen",
    },
    {
        offset: [0, 0],
        title: "Haugesund",
    },
    {
        offset: [0, 0],
        title: "Ølen",
    },
    {
        offset: [400, 500],
        title: "Oslo",
    },
    {
        offset: [0, 0],
        title: "Stavanger",
    },
    {
        offset: [0, 0],
        title: "Stord",
    },
]

function Markers() {
    const theme = useTheme();

    return (
        <React.Fragment>
            {markers.map((marker, index) => (
                <span
                    key={index}
                    style={{
                        position: 'absolute',
                        top: marker.offset[0],
                        left: marker.offset[1],
                        zIndex: theme.zIndex.mobileStepper,
                    }}
                    >
                    <GeoMarkerIcon color="error"/>
                </span>
            ))}
        </React.Fragment>
    );
}

function Component() {
    return (
        <React.Fragment>
            <g>
                <Markers/>
                <NorwayMap/>
            </g>
        </React.Fragment>
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
                {props => <div className={classes.root} style={props}><Component/></div>}
            </Spring>
        </React.Fragment>
    );
}