import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

// Icons
import AssignmentIcon from '@material-ui/icons/Assignment';

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

function Content() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.flexRow} style={{ marginLeft: '40px', marginTop: '-20px' }}>
                <AssignmentIcon style={{color: '#00FF97'}} fontSize="large" />
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
                    I hvilken sektorer innenfor energi jobber vi?
                </h2>
                <div style={{borderTop: '8px solid #00FF97', width: '30vw'}}>
                        
                </div>
            </div>
        </div>
    );
}

export default function Page4() {
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