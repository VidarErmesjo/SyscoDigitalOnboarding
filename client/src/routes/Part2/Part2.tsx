import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

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
            /*position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -geoSize * 0.5,
            marginLeft: -geoSize * 0.5,
            width: geoSize,
            height: geoSize,
            zIndex: -1,*/
        },
    })
);

export default function Part2(props: any) {
    const theme = useTheme();
    const classes = useStyles();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    console.log(document.getElementById('content')?.clientWidth);
    
    return (
        <React.Fragment>
            <animated.div
                style={style}
                >
                <div>
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
                </div>
            </animated.div>
        </React.Fragment>
    );
}