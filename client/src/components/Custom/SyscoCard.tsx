import React from 'react';

import {
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            width: 1540,
            height: 820,
            backgroundColor: theme.palette.primary.main,

            transform: `scale(0.7, 0.7)`,
            userSelect: 'none',
        },
        heading: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        iconText: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
    }),
);

interface SyscoSubHeadingProps {
    color?: 'primary' | 'secondary';
    heading: string;
    icon: React.ReactNode;
    iconText: string;
    content: null | React.ReactNode;
}

export default function SyscoCard(props: SyscoSubHeadingProps): JSX.Element {
    const {color, heading, icon, iconText, content} = props;

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <div className={classes.iconText}>
                    <IconButton disabled>
                    {icon}
                    <Typography
                        color={color}
                        variant="h5"
                        >
                        {iconText}
                    </Typography>
                    </IconButton>
                </div>
                <Typography
                    color={color === "primary" ? "secondary" : "textPrimary" }
                    variant="h4"
                    className={classes.heading}
                    >
                    <em>{heading}</em>
                </Typography>
                {content}
            </div>
        </React.Fragment>
    );
}