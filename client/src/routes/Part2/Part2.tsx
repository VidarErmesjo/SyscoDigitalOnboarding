import React from 'react';

import {
    Box,
    createStyles,
    Fade,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from 'react-simple-maps';

import Markers from './Markers';

const geoUrl: string = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const geoSize = 1000;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        geoMap: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -geoSize * 0.5,
            marginLeft: -geoSize * 0.5,
            width: geoSize,
            height: geoSize,
            zIndex: -1,
        },
    })
);

export default function Part2() {
    const theme = useTheme();
    const classes = useStyles();

    const timeout = theme.transitions.duration.enteringScreen;

    document.body.style.overflowY = 'hidden';
    
    return (
        <React.Fragment>
            <Fade in={true} timeout={timeout}>
                <Box className={classes.geoMap}>
                    <ComposableMap
                        projection="geoAzimuthalEqualArea"
                        projectionConfig={{
                            center: [15, 61],
                            scale: 3000,
                        }}
                        >
                        <ZoomableGroup zoom={1}>
                            <Geographies geography={geoUrl}>
                                {({geographies}) => geographies
                                    .map(geo =>
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={theme.palette.primary.main}
                                        stroke={theme.palette.secondary.main}
                                        style={{
                                            default: {
                                              outline: "none"
                                            },
                                            hover: {
                                              outline: "none"
                                            },
                                            pressed: {
                                              outline: "none"
                                            }
                                        }}
                                    />)}
                            </Geographies>
                            <Markers/>
                        </ZoomableGroup>
                    </ComposableMap>
                </Box>
            </Fade>
        </React.Fragment>
    );
};