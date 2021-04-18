import React from 'react';

import {
    Box,
    ButtonBase,
    createStyles,
    Icon,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme,
    withStyles
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
        category: {
            /*width: '100%',
            display: 'flex',
            flex: '0 0 auto',
            alignItems: 'inherit',
            justifyContent: 'inherit',
            textAlign: 'center',
            fontSize: theme.typography.pxToRem(24),
            padding: 12,
            borderRadius: '50%',
            overflow: 'visible',*/
            color: theme.palette.secondary.main,// theme.palette.action.active, 
        },
    }),
);

interface SyscoSubHeadingProps {
    color?: 'primary' | 'secondary';
    title: string;
    icon: React.ReactNode;
    category: string;
    content: null | React.ReactNode;
}

export default function SyscoCard(props: SyscoSubHeadingProps): JSX.Element {
    const {color, title, icon, category, content} = props;
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <IconButton
                    disabled
                    style={{ color: color === "primary" ? theme.palette.text.primary : theme.palette.secondary.main }}
                    {...props}
                    >
                    {icon}                 
                    <Typography
                        color={color === "primary" ? "textPrimary" : "secondary"}
                        variant="h5"
                        >
                        {category}
                    </Typography>
                </IconButton>
                <Typography
                    color={color === "primary" ? "secondary" : "textPrimary"}
                    variant="h4"
                    className={classes.title}
                    >
                    <em>{title}</em>
                </Typography>
                {content}
            </div>
        </React.Fragment>
    );
}