import { useTheme } from '@material-ui/core';

import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from 'react-simple-maps';

import { Zustand } from '../../../store';

import geoMap from '../../../assets/world-map.json';

import Markers from './Markers';

export default function WorldMap() {
    //const [geoMap] = Zustand.useStore(state => [state.geoMap]);

    const theme = useTheme();

    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                center: [15, 61],
                scale: 1000,
            }}
            >
            <ZoomableGroup zoom={1}>
                <Geographies geography={geoMap}>
                    {({geographies}) => geographies
                        .filter((data) => data.properties.NAME === "Norway")
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
        </ComposableMap>
    );
}