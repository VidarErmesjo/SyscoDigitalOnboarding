import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
    SvgIcon,
    SvgIconProps,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '&:hover': {
                fill: theme.palette.secondary.dark,
            },
        },
    }),
);

export function SyscoTodoIcon(props: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fontSize="large"
            viewBox="0 0 77 77"
            {...props}
            >
            <circle
                cx="38.5"
                cy="38.5"
                r="38.5"
                fill={theme.palette.primary.main}
            />
        </SvgIcon>
    );
}

export function SyscoActiveIcon(props: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fontSize="large"
            viewBox="0 0 77 77"
            {...props}
            >
            <circle
                cx="38.5"
                cy="38.5"
                r="38.5"
                fill={props.color}
            />
            <circle
                cx="38.5"
                cy="38.5"
                r="26.5" 
                fill={theme.palette.primary.main} 
            />
        </SvgIcon>
    );
}

export function SyscoCompletedIcon(props: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fontSize="large"
            viewBox="0 0 77 77"
            {...props}
            >
            <circle
                cx="38.5"
                cy="38.5"
                r="38.5"
                fill={props.color}
            />
            <path
                fill={theme.palette.primary.main}
                fillRule="evenodd"
                d="M62.657 24.732a5.716 5.716 0 10-9.714-6.03l-16.27 26.212-12.866-11.72a6.458 6.458 0 00-8.698 9.55l16.582 15.103c.408.372.852.682 1.318.93a5.716 5.716 0 009.054-.868l20.594-33.177z"
                clipRule="evenodd"
            />
        </SvgIcon>
    );
}

export function SyscoDoneIcon(props: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fontSize="large"
            viewBox="0 0 77 77"
            {...props}
            >
            <path
                fill={props.color}
                fillRule="evenodd"
                d="M62.657 24.732a5.716 5.716 0 10-9.714-6.03l-16.27 26.212-12.866-11.72a6.458 6.458 0 00-8.698 9.55l16.582 15.103c.408.372.852.682 1.318.93a5.716 5.716 0 009.054-.868l20.594-33.177z"
                clipRule="evenodd"
            />
        </SvgIcon>
    );
}

interface Props {
    active?: boolean | undefined;
    completed?: boolean | undefined;
}

export default function SyscoStepIcon({active, completed}: Props): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();
    const size = 40;
    const circleDims = 38.5;
    const innerRadius = 26.5;

    return (
        <React.Fragment>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="none"
                viewBox="0 0 77 77"
                >
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
                                fill={theme.palette.primary.main} 
                            />
                        </g>}
                    </Spring>
                : completed ?
                    <React.Fragment> 
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
                                <path
                                    fill={theme.palette.primary.main}
                                    fillRule="evenodd"
                                    d="M62.657 24.732a5.716 5.716 0 10-9.714-6.03l-16.27 26.212-12.866-11.72a6.458 6.458 0 00-8.698 9.55l16.582 15.103c.408.372.852.682 1.318.93a5.716 5.716 0 009.054-.868l20.594-33.177z"
                                    clipRule="evenodd"
                                />
                            </g>}
                        </Spring> 
                    </React.Fragment>
                :
                    <circle
                        cx={circleDims}
                        cy={circleDims}
                        r={circleDims}
                        fill={theme.palette.primary.main}
                    />}
            </svg> */}
        </React.Fragment>
    );
}