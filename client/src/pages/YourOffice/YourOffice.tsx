import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoPage,
    SyscoLine
} from './../../components/Custom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        config: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(28),
        },
        item: {
            width: '100%',
        },
    })
);

function Content() {
    const classes = useStyles();

    const Title = (): JSX.Element => {
        return (<Typography color="secondary" variant="h1">Kontoret ditt</Typography>);
    }

    return (
        <div className={classes.config}>
            <Box component={Title} className={classes.item}/>
            <Box component={SyscoLine} className={classes.item}/>
        </div>
    );
}

export default function YourOffice() {
    const classes = useStyles();
    const theme = useTheme();

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={null}
                category="DEL 2"
                icon={null}
                content={<Content/>}
                color="secondary"
            />           
        );
    }
    
    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div className={classes.root} style={props}>
                    <Component/>
                </div>}  
            </Spring>
        </React.Fragment>
    );
}