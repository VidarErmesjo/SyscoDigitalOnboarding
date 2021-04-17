import React from 'react';

import {
    createStyles,
    Drawer,
    makeStyles,
    Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
            backgroundColor: 'transparent',
		},
    }),
);

export default function TransparentDrawer({...rest}) {
    const classes = useStyles();

    return (
        <Drawer {...rest} classes={{ paper: classes.drawer}} />
    );
};