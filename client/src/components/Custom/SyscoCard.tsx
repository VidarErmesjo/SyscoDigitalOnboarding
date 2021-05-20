import React from "react";

import {
    createStyles,
    IconButton,
    makeStyles,
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
    const theme = useTheme();

    return (
        <span className={classes.item}>
            <IconButton
                color="secondary"
                onClick={onClick}
                disableRipple
                className={classes.iconButton}
                >
                {icon}
                <Typography
                    color="inherit"
                    noWrap
                    style={{
                        fontSize: 34,
                        lineHeight: "39.1px",
                        marginLeft: theme.spacing(1)
                    }}
                    >
                    {title}
                </Typography>
            </IconButton>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: 24,
                    lineHeight: "27.6px",
                    fontStyle: "normal",
                    fontWeight: "normal"
                }}
                >
                {content}
            </Typography>
        </span>
    );
}
