import React from 'react';

import {
    Box,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
} from '../../../components/Custom';

import { CheckIcon, PeopleIcon } from '../../../components/Icons';

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
        line: {
            width: 190,
            borderTop: `5px solid ${theme.palette.secondary.main}`
        },
    })
);

const category = "Vi er problemløsere";
const title = "Arbeidsoppgavene";
const heading = "13 ansatte fra SYSCO var på saken."
const listItems: string[] = [
    "Vi drev med kunnskapsoverføring.",
    "Vi etablerte rammeverk og driftsdokumentasjon.",
    "Vi testet nyetablerte prosesser og tekniske rutiner.",
    "Vi overleberte fra Accenture til Basefarm/SYSCO.",
    "Vi drev med en hel del katastrofetesting."  
]
const rightHeading = "Hvordan ble prosjektet planlagt og gjennomført?";
const rightText = "Det ble det brukt confluence (Som er en “collaboration software”) og Jira (kundens instanser) for planlegging og gjennomføring. Basefarm/SYSCO brukte på sin side Testrail for testing, Microsoft Project og Teams for gjennomføring på sin side";

export default function Page9() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <Box

        className={classes.content}
        >
        <Typography
            color="textSecondary"
            style={{
                position: "absolute",
                left: 509,
                top: 234,
                fontSize: 60,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "68.99px"
            }}
            >
            {title}
        </Typography>
    </Box>

    const Category = () => <IconButton
        disabled
        style={{
            color: theme.palette.text.secondary
        }}
        >
        <CheckIcon color="inherit" fontSize="large"/>
        <Typography
            color="inherit"
            style={{
                fontSize: 40,
                lineHeight: "46px",
                zIndex: theme.zIndex.mobileStepper
            }}
            >
            {category}
        </Typography>
    </IconButton>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            left="-1px"
            bottom="-1px"
            width="1542px"
            height="504px"
            style={{ backgroundColor: theme.palette.primary.main }}
            >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                >
                <PeopleIcon color="secondary" style={{ fontSize: 84 }}/>
                <Typography
                    color="textPrimary"
                    style={{
                        fontSize: 45,
                        fontWeight: 400,
                        lineHeight: "51,75px"
                    }}
                    >
                    {heading}
                </Typography>
                <div className={classes.line} style={{ marginTop: 8, marginBottom: 64 }}/>
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="baseline"
                >
                <div className={classes.item}>
                    <ul
                        style={{
                            listStyle: "square",
                            fontSize: 30,
                            color: theme.palette.secondary.main
                        }}
                        >
                        {listItems.map((item, index) => ( 
                            <li key={index}>
                                <Typography
                                    color="textPrimary"
                                    style={{
                                        fontSize: 20,
                                        lineHeight: "23px"
                                    }}
                                    >
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.item}>
                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: 23,
                            lineHeight: "26.45px",
                            textAlign: "center",
                            marginBottom: 27
                        }}
                        >
                        {rightHeading}
                    </Typography>
                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: 20,
                            lineHeight: "23px",
                            borderLeft: `5px solid ${theme.palette.secondary.main}`,
                            paddingLeft: theme.spacing(2),
                            width: 700
                        }}
                        >
                        {rightText}
                    </Typography>
                </div>
            </Box>
        </Box>
    </React.Fragment>

    const Component = () => {
        return (
            <SyscoPage
                title={<Title/>}
                category={<Category/>}
                icon={null}
                content={<Content/>}
                color="primary"
                style={{
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.paper
                }}
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