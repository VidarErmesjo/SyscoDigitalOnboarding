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

export function SyscoActiveIcon({color, ...props}: SvgIconProps): JSX.Element {
    const theme = useTheme();

    return (
        <SvgIcon
            fontSize="large"
            viewBox="0 0 80 80"
            {...props}
            >
            <circle
                cx="40"
                cy="40"
                r="40"
                fill={color}
            />
            <circle
                cx="40"
                cy="40"
                r="26.5" 
                fill={theme.palette.primary.main} 
            />
        </SvgIcon>
    );
}

export function SyscoCompletedIcon({color, ...props}: SvgIconProps): JSX.Element {
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
                fill={color}
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

export function SyscoDoneIcon({color, ...props}: SvgIconProps): JSX.Element {

    return (
        <SvgIcon
            fill={color}
            fontSize="large"
            viewBox="0 0 77 77"
            {...props}
            >
            <path
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

    return (
        <React.Fragment>
        </React.Fragment>
    );
}