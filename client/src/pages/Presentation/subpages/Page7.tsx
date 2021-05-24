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

import { CheckIcon } from '../../../components/Icons';

import Background from '../../../assets/images/ElhubProsjektet.png';

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

const title = "ELHUB-PROSJEKTET";
const text = "Hvordan ser egentlig et vanlig prosjekt hos SYSCO ut? De neste sidene er en liten oppsummering av prosjektet “Elhub”"

export default function Page7() {
    const classes = useStyles();
    const theme = useTheme();

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            left="495px"
            top="311px"
            width="563px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            >
            <Typography
                style={{
                    color: theme.palette.info.main,
                    fontSize: 50,
                    fontWeight: 700,
                    lineHeight: "57.5px",
                }}
                >
                {title}
            </Typography>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: "20.7px",
                    textAlign: "center"
                }}
                >
                {text}
            </Typography>
        </Box>
    </React.Fragment>

    const Component = () => {
        return (
            <SyscoPage
                title={null}
                category="Vi er problemløsere"
                icon={<CheckIcon fontSize="large"/>}
                content={<Content/>}
                color="secondary"
                style={{ backgroundImage: `url(${Background})` }}
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