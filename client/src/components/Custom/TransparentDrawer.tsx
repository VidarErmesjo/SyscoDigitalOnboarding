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
    const { anchor, open, onClick, onClose } = props;

    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClick={onClick}
            onClose={onClose}
            classes={{ paper: classes.drawer }}
            >
            {props.children}
        </Drawer>
    );
};