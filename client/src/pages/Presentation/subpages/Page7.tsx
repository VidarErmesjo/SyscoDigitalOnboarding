import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
} from '../../../components/Custom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        item: {
            width: '100%',
        },
    })
);

function Content() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography color="secondary" variant="h1">Side 7</Typography>
        </div>
    );
}

export default function Page7() {
    const classes = useStyles();
    const theme = useTheme();

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={null}
                category={null}
                icon={null}
                content={<Content/>}
                color="secondary"
            />           
        );
    }
    
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Component/>
            </div>
        </React.Fragment>
    );
}