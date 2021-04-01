import React from 'react';

import {
    createStyles,
    makeStyles,
    useTheme,
    Theme
} from '@material-ui/core';

import {
    Marker,
    Point
} from 'react-simple-maps';

// SYSCO kontor
const markers = [
    {
        offset: [0, 15] as Point,
        name: "Hovedkontor: Haugesund",
        coordinates: [5.2168, 59.2168] as Point
    },
    {
        offset: [0, 15] as Point,
        name: "Oslo, Lysaker",
        coordinates: [10.6450, 59.8937] as Point
    },
    {
        offset: [-35, -10] as Point,
        name: "Bergen",
        coordinates: [5.1489, 60.3648] as Point
    },
    {
        offset: [-30, -8] as Point,
        name: "Stord",
        coordinates: [5.3456, 59.8234] as Point
    },
    {
        offset: [30, -6] as Point,
        name: "Ølen",
        coordinates: [5.8000, 59.6049] as Point
    }
];

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        marker: {            
            '&:hover': {
                fill: theme.palette.error.main,
            },
        },
        markerText: {
            fontFamily: theme.typography.fontFamily,
            fill: theme.palette.text.primary,
            userSelect: 'none',
        },
    })
);

export default function Markers(props: any) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            {markers.map(({name, coordinates, offset})  => (                          
                <Marker
                    key={name}
                    coordinates={coordinates}                                                           
                    >
                    <g
                        fill="none"
                        stroke={theme.palette.error.main}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                        className={classes.marker}
                        onClick={() => alert(`${name}`)}
                        >
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
                    </g>
                    <text
                        textAnchor="middle"
                        x={offset?.[0]}
                        y={offset?.[1]}
                        className={classes.markerText}
                        >
                        {name}
                    </text>
                </Marker>
            ))}
        </React.Fragment>
    );
}