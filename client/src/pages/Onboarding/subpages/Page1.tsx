import React from "react";

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme,
} from '@material-ui/core';

import {
    SyscoCard,
    SyscoPage
} from '../../../components/Custom';

import {
    AccountIcon,
    AssignmentIcon,
    WavingPersonIcon
} from '../../../components/icons';

const itemSpacing = 24;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
            color: theme.palette.secondary.main,
            fontStyle: 'normal',
        },
        config: {
            position: 'relative',
            width: 1540,
            height: 820,
            backgroundColor: theme.palette.primary.main,

            userSelect: 'none',
        },
        container: {
            display: 'flex',
            flex: '0 0 row',
            gap: theme.spacing(itemSpacing),
            justifyContent: 'center',
            alignContent: 'space-evenly',
            textAlign: 'center',
            marginLeft: theme.spacing(itemSpacing),
            marginRight: theme.spacing(itemSpacing),           
        },
        item: {
            width: '33%',
            maxWidth: 284,
            margin: theme.spacing(4),
            textAlign: 'left',
        },
        iconButton: {
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
                background: 'none',
                transform: `scale(1.25)`,
            },
        },
    }),
);

interface IItem {
    title: string
    text: string
    icon: JSX.Element
}

const items: IItem[] = [
    {
        title: "Brukerkontoer",
        text: "Som SYSCO ansatt vil du måtte ha en brukerkonto på flere plattformer. Noen skal du allerede ha fått tildelt. Andre har du fortsatt ikke fått.",
        icon: <AccountIcon/>
    },
    {
        title: "Fadder",
        text: "Som nyansatt får du en SYSCO fadder som vil følge deg opp den første tiden. Hen vil være en coach og veileder  de første ca. 3 ukene.",
        icon: <WavingPersonIcon/>
    },
    {
        title: "Personalhåndbok",
        text: "Personalhåndboken skal gi informasjon til deg som ansatt om de forhold som er sentrale i ditt ansettelsesforhold i SYSCO. Personalhåndboken er utviklet i samarbeid med Simployer, som vedlikeholder regelverket.",
        icon: <AssignmentIcon/>
    }
]

export default function Page1() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.title}>
        <Box
            position="absolute"
            left="417px"
            top="29px"
            >
            <Typography
                color="inherit"
                style={{
                    fontSize: 40,
                    lineHeight: "46px"
                }}
                >
               Onboarding
            </Typography>
        </Box>
        <Box
            position="absolute"
            left="582px"
            top="75"
            >
            <Typography
                color="inherit"
                style={{
                    fontSize: 30,
                    lineHeight: "34.5px"
                }}
                >
               - Hva trenger du for å komme igang?
            </Typography>
        </Box>
    </div>

    const Content = () => <Box
        position="absolute"
        top="300px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="baseline"
        >
        {items.map((item, inde) => (
            <span className={classes.item}>
                <SyscoCard
                    title={item.title}
                    icon={item.icon}
                    content={item.text}
                    onClick={() => alert("After work")}                     
                />
            </span>
        ))}
    </Box>

    const Component = () => {
        return (
            <React.Fragment>
                <SyscoPage
                    title={<Title/>}
                    category="DEL 3"
                    icon={null}
                    content={<Content/>}
                    color="secondary"
                />    
            </React.Fragment>
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