import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
} from '../../../components/Custom';

import { AssignmentIcon } from '../../../components/icons';

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
        infoBox: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            borderLeft: `${theme.spacing(1)}px solid ${theme.palette.secondary.main}`,
            width: 800,
        },
    })
);

function InfoBox() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <span className={classes.infoBox}>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: 23,
                    lineHeight: '26.45px',
                    marginLeft: theme.spacing(4)
                }}
                >
                SYSCO har sin personalhåndbok i Simployer, tilgjengelig på både norsk og engelsk: 
                <br/><br/>
                Her står det veldig mye nyttig alle ansatte skal familiarisere seg med. Du kan enten bla igjennom hele boken fra tema til tema, eller søke etter et konkret stikkord.  Du bruker din Microsoft Azure konto til å logge deg på, den samme som du bruker til Outlook og Teams.
             </Typography>
        </span>
    );
}

function Content() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <InfoBox/>
        </div>
    );
}

export default function Page9() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <Box
            display="flex"
            flexDirection="row"
        >
        <Typography
            color="textPrimary"
            variant="h3"
            style={{ fontStyle: 'normal' }}
            >
            Personalhåndboka
        </Typography>
        <AssignmentIcon
            color="inherit"
            style={{
                fontSize: 42,
                marginLeft: theme.spacing(2),
                marginTop: theme.spacing(1)
            }}
        />
    </Box>

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={<Title/>}
                category="Personalhåndbok"
                icon={<AssignmentIcon color="secondary" style={{ marginRight: theme.spacing(1) }}/>}
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