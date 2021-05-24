import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

import { Assignment as AssignmentIcon } from '@material-ui/icons';

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
        item: {
            width: '100%',
        },
        flexRow: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '15px',
            justifyContent: 'flex-start'
        },
        whiteColor: {
            color: "#FFFFFF"
        },
    })
);

export default function Page3() {
    const classes = useStyles();

    const Content = () => {   
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
                <div>
                    <p className={classes.whiteColor} 
                        style={{
                            maxWidth: '65vw', 
                            fontSize: 34, 
                            marginLeft: '32vw', 
                            borderLeft: '10px solid #00FF97', 
                            paddingLeft: '35px',
                            height: 'inherit',
                            position: 'relative',
                            top: '10vw',
                            right: '10vw'
                        }}>
                        Hva gjør vi egentlig i Sysco? Jo, vi lager programvare til 
                        <strong>energisektoren!</strong> Vi samler inn og lagrer 
                        data fra bransjens kjernesystemer og andre relevante datakilder.
                        Dataene bruker vi til å gi ny, verdifull innsikt som både effektiviserer
                        arbeidsoppgaver og forbedrer resultatet.
                    </p>
                </div>
            </div>
        );
    }    

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