import React from 'react';

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
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            width: 1540,
            height: 820,
            backgroundColor: theme.palette.primary.main,

            transform: `scale(0.75)`,
            userSelect: 'none',
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        },
    }),
);

interface SyscoCardProps {
    color: 'primary' | 'secondary';
    title: string | null;
    icon: React.ReactNode;
    category: string | null;
    content: React.ReactNode | null;
}

export default function SyscoCard(props: SyscoCardProps): JSX.Element {
    const {color, title, icon, category, content} = props;

    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <section className={classes.root}>
                <IconButton
                    disabled
                    style={{
                        color: color === "primary"
                        ? theme.palette.text.primary
                        : theme.palette.secondary.main
                    }}
                    >
                    {icon}
                    <Typography
                        color={
                            color === "primary"
                            ? "textPrimary"
                            : "secondary"
                        }
                        variant="h5"
                        >
                        {category}
                    </Typography>
                </IconButton>
                <Typography
                    color={
                        color === "primary"
                        ? "secondary"
                        : "textPrimary"
                    }
                    variant="h4"
                    className={classes.title}
                    >
                    <em>{title}</em>
                </Typography>
                <span className={classes.content}>
                    {content}
                </span>
            </section>
        </React.Fragment>
    );
}