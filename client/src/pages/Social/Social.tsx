import React from 'react';
import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

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

export default function Social() {
    const classes = useStyles();

    const Title = () => <Typography color="secondary" variant="h1">Sosialt i SYSCO</Typography>;

    const Content = () => {    
        return (
            <div className={classes.config}>
                <Box component={Title} className={classes.item}/>
                <Box component={SyscoLine} className={classes.item}/>
            </div>
        );
    }

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={null}
                category="DEL 4"
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
};