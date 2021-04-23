import React from 'react';
import {
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            transform: `translate(-50%, -50%)`,
        },
    })
);

function Content() {
    return (
        <React.Fragment>
            <Typography color="secondary" variant="h3">Innhold</Typography>
        </React.Fragment>
    );
}

export default function EmptyPage() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div style={props} className={classes.root}>
                    <Content/>                
                </div>}
            </Spring>     
        </React.Fragment>
    );
}