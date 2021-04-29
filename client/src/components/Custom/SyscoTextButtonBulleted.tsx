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

import { CubeIcon } from './../Icons';

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
                transform: `scale(1.5)`,
            },
        },
    }),
);

interface Props {
    value: string;
    offset: [number, number];
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function SyscoTextButtonBulleted(props: Props): JSX.Element {
    const { value, offset, onClick } = props;

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