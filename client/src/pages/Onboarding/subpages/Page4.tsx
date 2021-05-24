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
    WorkplaceLogo
} from '../../../components/Custom';

import { AccountIcon } from '../../../components/Icons';

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
        linkText: {
			transition: theme.transitions.duration.standard + 'ms',
			color: theme.palette.info.main,
			'&:hover': {
				color: theme.palette.info.dark,
			},
            fontSize: 20,
            lineHeight: "23px",
            marginLeft: theme.spacing(4),
            marginTop: theme.spacing(1)
		},
    })
);

const text = "Vi bruker noe som kalles “Workplace” som intranett. Det er som et slags Facebook for bedrifter. Her finner du informasjon om hva som skjer i bedriften. Her er det også greit du gjør deg kjent med innholdet og hvilket grupper som er nødvendig å være medlem av. Her kan også sjekke om organisasjonsstrukturen er satt riktig, og legge inn et bilde av deg selv.";
const linkText = "inn på: sysco.facebook.com";
const link = "http://sysco.facebook.com";

export default function Page4() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <WorkplaceLogo/>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            top="367px"
            width="750px"
            height="184px"
            borderColor={theme.palette.secondary.main}
            borderLeft={theme.spacing(1)}
            >
            <Typography
                color="textPrimary"
                style={{
                    fontSize: 23,
                    lineHeight: "26px",
                    marginLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
                >
                <Typography
                    className={classes.linkText}
                    >
                    {linkText}
                </Typography>
            </a>
        </Box>
    </React.Fragment>

    const Component = () => {
        return (
            <SyscoPage
                title={<Title/>}
                category="Brukerkontoer"
                icon={<AccountIcon/>}
                content={<Content/>}
                color="primary"
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