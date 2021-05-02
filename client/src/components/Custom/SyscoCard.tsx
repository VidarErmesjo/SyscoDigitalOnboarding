import React from "react";

import {
    Box,
    ButtonBase,
    createStyles,
    Icon,
    IconButton,
    makeStyles,
    SvgIconProps,
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
    title: React.ReactNode | string | null;
    icon?: JSX.Element | null;
    content: React.ReactNode | string | null;
    onClick?: () => void;
}

export default function SyscoCard({title, icon, content, onClick}: SyscoCardProps): JSX.Element {
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
                <Typography color="inherit" variant="h4" noWrap style={{ marginLeft: '0.25em'}}>
                    {title}
                </Typography>
            </IconButton>
            <Typography
                color="textPrimary"
                variant="body1"
                >
                {content}
            </Typography>
        </span>
    );
}
