import React from 'react';

import {
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme,
} from '@material-ui/core';

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

interface SyscoPageProps {
    color: 'primary' | 'secondary';
    title: string | null;
    icon: React.ReactNode;
    category: string | null;
    content: React.ReactNode | null;
}

export default function SyscoPage(props: SyscoPageProps): JSX.Element {
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
                {title && <Typography
                    color={
                        color === "primary"
                        ? "secondary"
                        : "textPrimary"
                    }
                    variant="h4"
                    className={classes.title}
                    >
                    <em>{title}</em>
                </Typography>}
                {content && <div className={classes.content}>
                    {content}
                </div>}
            </section>
        </React.Fragment>
    );
}