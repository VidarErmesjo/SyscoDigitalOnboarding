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

export default function TransparentDrawer(props: any) {
    const classes = useStyles();

    return (
        <Drawer {...props} classes={{ paper: classes.drawer}} />
    );
};