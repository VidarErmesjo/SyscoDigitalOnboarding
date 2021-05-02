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

import { CubeIcon } from '../icons';

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
                transform: `scale(1.25)`,
            },
        },
    }),
);

export interface SyscoTextButtonBulletedProps {
    //[key: string]: any;
    value: string;
    offset: [number, number];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SyscoTextButtonBulleted({value, offset, onClick}: SyscoTextButtonBulletedProps) {
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
                    onClick={onClick}
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