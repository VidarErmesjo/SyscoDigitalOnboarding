import React from "react";

import {
    useTheme,
    StepIconProps
} from '@material-ui/core';

import {
    animated,
    useSpring,
} from 'react-spring';

import { Spring } from 'react-spring/renderprops';

function Active() {
    const theme = useTheme();
    return (
        <g>
            <circle cx="38.5" cy="38.5" r="26.5" fill={theme.palette.primary.main}/>
        </g>
    );
}

function CheckIcon() {
    const theme = useTheme();

    return (
                <g>
                    <path
                        fill={theme.palette.primary.main}
                        fillRule="evenodd"
                        d="M62.657 24.732a5.716 5.716 0 10-9.714-6.03l-16.27 26.212-12.866-11.72a6.458 6.458 0 00-8.698 9.55l16.582 15.103c.408.372.852.682 1.318.93a5.716 5.716 0 009.054-.868l20.594-33.177z"
                        clipRule="evenodd"
                    />
                </g>
        // <g>
        //     <path
        //         fill={theme.palette.primary.main}
        //         fillRule="evenodd"
        //         d="M62.657 24.732a5.716 5.716 0 10-9.714-6.03l-16.27 26.212-12.866-11.72a6.458 6.458 0 00-8.698 9.55l16.582 15.103c.408.372.852.682 1.318.93a5.716 5.716 0 009.054-.868l20.594-33.177z"
        //         clipRule="evenodd"
        //     />     
        // </g>
    );
}

interface StepperIconProps {
    active?: boolean | undefined;
    completed?: boolean | undefined;
}

export default function StepperIcon({active, completed}: StepperIconProps) {
    const theme = useTheme();
    const size = 40;
    const circleDims = 38.5;
    const innerRadius = 26.5;

    return (
        <React.Fragment>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="none"
                viewBox="0 0 77 77"
                >
                {/* <circle
                    cx={circleDims}
                    cy={circleDims}
                    r={circleDims}
                    fill={active || completed ? theme.palette.secondary.main : theme.palette.primary.main}
                /> */}
                {active ?
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ duration: theme.transitions.duration.standard }}
                        >
                        {props => <g style={props}>
                            <circle
                                cx={circleDims}
                                cy={circleDims}
                                r={circleDims}
                                fill={theme.palette.secondary.main}
                            />
                            <circle
                                cx={circleDims}
                                cy={circleDims}
                                r={innerRadius} 
                                fill={theme.palette.primary.main}/>
                        </g>}
                    </Spring>
                : completed ? <React.Fragment> 
                                            <circle
                                            cx={circleDims}
                                            cy={circleDims}
                                            r={circleDims}
                                            fill={theme.palette.secondary.main}
                                        />
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{ duration: theme.transitions.duration.standard }}
                        >
                        {props => <g style={props}>
                            <CheckIcon/>
                        </g>}
                    </Spring> </React.Fragment>
                :                                             <circle
                cx={circleDims}
                cy={circleDims}
                r={circleDims}
                fill={theme.palette.primary.main}
            />}

            </svg>
        </React.Fragment>
    );
}