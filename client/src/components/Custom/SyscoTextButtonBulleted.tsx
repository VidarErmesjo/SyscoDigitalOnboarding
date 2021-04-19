import React from "react";

import {
    Box,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Point } from "react-simple-maps";

import { CubeIcon } from './../Icons';
import { useWindowSize } from "../Dashboard/Dashboard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
        },
        iconButton: {
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
                background: 'none',
            },
        },
    }),
);

interface Props {
    value: string;
    offset: [number, number];
}

export default function SyscoTextButtonBulleted(props: Props): JSX.Element {
    const { value, offset } = props;

    const classes = useStyles();

    const theme = useTheme();

    return (
        <React.Fragment>
            <div    
                className={classes.root} 
                style={{ top: offset[0] , left: offset[1]}}
                >
                <IconButton
                    color="secondary"
                    disableRipple
                    onClick={() => alert("You clicked me!")}
                    className={classes.iconButton}
                    >
                    <CubeIcon/>
                    <Typography
                        color="textPrimary"
                        variant="caption"
                        style={{ fontSize: 18, marginLeft: theme.spacing(1) }}
                        >
                        <em>{value}</em>
                    </Typography>
                </IconButton>
            </div>
        </React.Fragment>
    );
}