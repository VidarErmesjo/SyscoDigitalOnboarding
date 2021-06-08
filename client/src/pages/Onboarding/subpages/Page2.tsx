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
    SimployerLogo,
    SyscoPage
} from 'components/Custom';

import { AccountIcon } from 'components/Icons';

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

const text = "Som ny i selskapet trenger du å bli kjent med Simployer. Simployer er SYSCO`s personalsystem. Det er her du finner all nøvendig personalinformasjon. Her kan du også gå inn på ditt personkort og kvalitetssikre den informasjonen som er registrert om deg, eventuelt legge til informasjonen som mangler. Samt legge inn et bildet av deg selv."
const linkText = "inn på https://portal.simployer.com/MainPages/StartPage/";
const link = "https://portal.simployer.com/MainPages/StartPage/";

export default function Page2() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <SimployerLogo/>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            top="332px"
            width="700px"
            height="188px"
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