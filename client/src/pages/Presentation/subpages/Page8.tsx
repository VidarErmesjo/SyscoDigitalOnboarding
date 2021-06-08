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
} from 'components/Custom';

import { CheckIcon, PeopleIcon } from 'components/Icons';

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
const title = "ELHUB prosjektet";
const heading = "Hvordan foregikk prosjektet?"
const leftHeading = "Hva er Elhub";
const leftText = "Elhub er en nøytral datahub som håndterer all måledata og markedsprosesser i det norske kraftmarkedet. Gjennom standardiserte grensesnitt for meldingsutveksling forholder alle markedsaktører seg til én part.";
const rightHeading = "Hva gikk prosjektet ut på?";
const rightText = "Prosjeket til SYSCO gikk ut på å flytte driften av denne datahuben hjem til Norge. “Elhu” hadde blitt utviklet og driften av Accenture, som i stor grad benyttet ressurser i India. Statnett opprettet datterselskapet Elhub for å utvikle og å eie plattformen. De utlyste derfor driften her i Norge. Det var da oss, Sysco, og Basefarm (et annet norsk it-selskap) som vant driftskontrakten. Basefarm hadde prosjektleder-rollen.";

export default function Page8() {
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
                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: 23,
                            lineHeight: "26.45px",
                            textAlign: "center",
                            marginBottom: 58
                        }}
                        >
                        {leftHeading}
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
                        {leftText}
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: 23,
                            lineHeight: "26.45px",
                            textAlign: "center",
                            marginBottom: 34
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