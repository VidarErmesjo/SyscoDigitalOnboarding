import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from 'react-simple-maps';

import Markers from './Markers';

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
