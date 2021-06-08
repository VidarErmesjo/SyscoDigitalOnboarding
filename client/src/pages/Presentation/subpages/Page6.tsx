import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Assignment as AssignmentIcon } from '@material-ui/icons';

import {
    SyscoPage,
} from 'components/Custom';

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
            width: '100%'
        },
        flexRow: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '15px',
            justifyContent: 'flex-start'
        },
        item: {
            width: '100%',
        },
        whiteColor: {
            color: "#FFFFFF"
        },
    })
);

export default function Page6() {
    const classes = useStyles();
    const theme = useTheme();

    const Content = () => {
        return (
            <div className={classes.content}>
                <div className={classes.flexRow} style={{ marginLeft: '40px', marginTop: '-20px' }}>
                    <AssignmentIcon color="secondary" fontSize="large" />
                    <Typography color="secondary" variant="h4">
                        <h4 style={{ marginLeft: '10px' }}>
                            Hva vi gjør
                        </h4> 
                    </Typography>
                </div>
                <div 
                    className={classes.whiteColor} 
                    style={{
                        fontSize: 32, 
                        marginTop: '10vw', 
                        display: 'flex', 
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <h2>
                        Hva slags type prosjekter har SYSCO?
                    </h2>
                    <div style={{ borderTop: `8px solid ${theme.palette.secondary.main}`, width: '30vw' }}/>
                </div>
            </div>
        );
    }    

    const Component = () => {
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