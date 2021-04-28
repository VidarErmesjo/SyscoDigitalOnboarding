import React from "react";

import {
    Box,
    ButtonBase,
    createStyles,
    Icon,
    IconButton,
    makeStyles,
    PropTypes,
    Theme,
    Typography,
    useTheme,
    withStyles,
} from '@material-ui/core';

const itemSpacing = 24;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            width: '33.33%',
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

interface SyscoCardProps {
    title: string | null;
    icon: React.ReactNode | null;
    config: string | null;
    onClick: () => void;
}

export default function SyscoCard({title, icon, config, onClick}: SyscoCardProps): JSX.Element {
    const classes = useStyles();

    return (
        <span className={classes.item}>
            <IconButton
                color="secondary"
                onClick={onClick}
                disableRipple
                className={classes.iconButton}
                >
                {icon}
                <Typography color="inherit" variant="h4" noWrap>
                    {title}
                </Typography>
            </IconButton>
            <Typography
                color="textPrimary"
                variant="body1"
                >
                {config}
            </Typography>
        </span>
    );
}
