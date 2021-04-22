import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from 'react-simple-maps';

import { Zustand } from './../../store';
import shallow from 'zustand/shallow';

import Markers from './Markers';
import CountryMap from './CountryMap';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        geoMap: {
            /*flex: '0 0 row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',*/

            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            transform: `translate(-50%, -50%)`,
        },
    })
);

export default function YourOffice() {
    const [geoMap] = Zustand.useStore(state => [state.geoMap], shallow);
    const theme = useTheme();
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div style={props} className={classes.geoMap}>
                    <CountryMap/>
                    {/* <ComposableMap
                        projection="geoAzimuthalEqualArea"
                        projectionConfig={{
                            center: [15, 61],
                            scale: 1000,
                        }}
                        >
                        <ZoomableGroup zoom={1}>
                            <Geographies geography={geoMap?.toString()}>
                                {({geographies}) => geographies
                                    .map(geo => <Geography
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
                    </ComposableMap> */}
                </div>}  
            </Spring>
        </React.Fragment>
    );
}