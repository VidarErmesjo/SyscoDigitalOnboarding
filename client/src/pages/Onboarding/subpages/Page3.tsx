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
    VismaSeveraLogo
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

const text = "Visma Severa og Visma Expense brukes til timeregistrering og refusjon av utgifter."
const linkText = "inn på: secure.severa.com";
const link = "http://secure.severa.com";

export default function Page3() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <VismaSeveraLogo/>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            top="386px"
            width="479px"
            height="100px"
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
            <br/>
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