import React from 'react';

import {
    Box,
    ButtonBase,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
    SyscoOverlay
} from '../../../components/Custom';

import { AccountIcon, LoginIcon, ShieldIcon } from '../../../components/icons';

import WikiLogo from '../../../components/Custom/WikiLogo.svg';
import SharepointLogo from '../../../components/Custom/SharepointLogo.svg';
import TeamsLogo from '../../../components/Custom/TeamsLogo.svg';
import OutlookLogo from '../../../components/Custom/OutlookLogo.svg';
import OneDriveLogo from '../../../components/Custom/OneDriveLogo.svg';
import SlackLogo from '../../../components/Custom/SlackLogo.svg';
import CVPartnerLogo from '../../../components/Custom/CVPartnerLogo.svg';
import UdemyLogo from '../../../components/Custom/UdemyLogo.svg';


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
    })
);

const Overlay1 = () => {
    const theme = useTheme();
    const text = "Wiki i denne forstand menes med den interne wikipedia.  Her finner du mye informasjon om produkter og løsninger vi har, samt prosesskart og kvalitetshåndbok. Her benyttes egen brukerident + passord"

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.5)}
            >
            <img src={WikiLogo} alt="Wiki logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay2 = () => {
    const theme = useTheme();
    const text = "ShareFile er Sysco`s løsning for fillagring. Her er det mulig å laste det ned: Mer informasjon om installasjon finner du her:"

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.5)}
            >
            <img src={SharepointLogo} alt="Sharepoint logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay3 = () => {
    const theme = useTheme();
    const text = "“Microsoft Teams er en samlet kommunikasjons- og samarbeidsplattform som kombinerer vedvarende arbeidsplasschat, videomøter, fillagring (inklusiv samarbeide om filer) og integrasjon med applikasjoner. Tjenesten er integrerert med virksomhetens abonnementsbaserte Office 365-kontorpakke og inneholder utvidelser som kan integreres med ikke-Microsoft-produkter. Teams er en konkurrent til tjenester som Slack og er videreutviklingen av Microsofts Skype for Business.” Kilde: Wikipedia";

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.25)}
            >
            <img src={TeamsLogo} alt="Microsoft Teams logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay4 = () => {
    const theme = useTheme();
    const text = "Microsoft Outlook er mailen din! Med Outlook på en PC, Mac eller mobil enhet, kan du: Organisere e-post slik at du kan fokusere på de viktigste meldingene. Administrere og dele kalenderen din for å planlegge møter på en enkel måte. Dele filer fra skyen slik at mottakerne alltid har den nyeste versjonen.";

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.25)}
            >
            <img src={OutlookLogo} alt="Microsoft Outlook logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay5 = () => {
    const theme = useTheme();
    const text = "I SYSCO bruker vi OneDrive sammen med Office 365 og Sharepoint server. Du logger på office 365, og velger OneDrive. Der får du tilgang til og mulighet til å redigere filer på enhetene dine.Du holder filene beskyttet i skyen, og du kan også dele dokumenter eller bilder i samarbeid med office.";
    
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.25)}
            >
            <img src={OneDriveLogo} alt="Microsoft OneDrive logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay6 = () => {
    const theme = useTheme();
    const text = "Her i Sysco bruker vi noe som kalles Slack. Dette er en kommunikasjonstjeneste som et gir muligheten til å opprette ulike samtalerom, som enten kan gjøres tilgjengelig for alle, eller private, der utvalgte brukere har tilgang. Tjenesten støtter også direktemeldinger mellom to personer, i tillegg til «mentions», på samme måter som på Twitter og Facebook. Varsler kan settes individuelt pr samtalerom; enten ved all aktivitet, der du blir nevnt eller der bestemte nøkkelord dukker opp.";
    
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.25)}
            >
            <img src={SlackLogo} alt="Slack logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay7 = () => {
    const theme = useTheme();
    const text = "CV Partner er et viktig verktøy i kartleggingen av de ansattes kompetanse, en slags organisering av CV`er. Sysco er en meget godt fornøyd kunde av CV Partner. Sysco har også hjulpet sine egne kunder med å komme i gang med bruk av CV Partner.";
    
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.25)}
            >
            <img src={CVPartnerLogo} alt="CV Partner logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

const Overlay8 = () => {
    const theme = useTheme();
    const text = "Udemy er plattformen Sysco kurser sine ansatte.Udemy har et bibliotek med over 40,000 kurs, 20k instruktører og 12 millioner studenter i 190 land rundt om i verden, så den har rekkevidde.";
    
    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginTop={theme.spacing(0.25)}
            >
            <img src={UdemyLogo} alt="Udemy logo"/>
            <Typography
                color="textSecondary"
                style={{
                    fontSize: 20,
                    fontStyle: "italic",
                    lineHeight: "23px",
                    width: 500,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    textShadow: "none",
                    marginLeft: theme.spacing(4),
                    paddingLeft: theme.spacing(4)
                }}
                >
                {text}
            </Typography>
        </Box>
    );
}

interface IPlatformList {
    title: string;
    content: JSX.Element;
    left?: number;
    top?: number,
    width?: number;
}

const platformList: IPlatformList[] = [
    {
        title: "Wiki",
        content: <Overlay1/>,
        left: 484,
        top: 393,
        width: 62
    },
    {
        title: "Sharepoint",
        content: <Overlay2/>,
        left: 553,
        top: 393,
        width: 109
    },
    {
        title: "Microsoft Teams",
        content: <Overlay3/>,
        left: 671,
        top: 393,
        width: 165
    },
    {
        title: "Microsoft Outlook",
        content: <Overlay4/>,
        left: 845,
        top: 393,
        width: 192
    },
    {
        title: "Microsoft OneDrive",
        content: <Overlay5/>,
        left: 483,
        top: 435,
        width: 186
    },
    {
        title: "Slack",
        content: <Overlay6/>,
        left: 675,
        top: 435,
        width: 98
    },
    {
        title: "CV Partner",
        content: <Overlay7/>,
        left: 780,
        top: 435,
        width: 118
    },
    {
        title: "Udemy",
        content: <Overlay8/>,
        left: 905,
        top: 435,
        width: 138
    }
]

function ButtonOverlayWrapper({title, content}: IPlatformList) {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Title = () => <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            marginLeft={theme.spacing(1)}
        >
        <LoginIcon fontSize="large"/>
        <Typography style={{
                fontSize: 40,
                fontStyle: "normal",
                lineHeight: '46,88px',
                marginLeft: theme.spacing(1)
            }}>
            {title}
        </Typography>
    </Box>

    const Content = () => content;

    return (
        <React.Fragment>
            <ButtonBase onClick={handleOpen}>
                <Typography
                    color="primary"
                    style={{
                        fontSize: 20,
                        lineHeight: "23.44px"
                    }}
                    >
                    {title}
                </Typography>
            </ButtonBase>
            <SyscoOverlay
                open={open}
                title={<Title/>}
                content={<Content/>}
                handleClose={handleClose}
            />
        </React.Fragment>
    );
}

export default function Page5() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <IconButton disabled style={{ color: theme.palette.background.paper, marginTop: 200 }}>
            <ShieldIcon style={{ fontSize: 52 }}/>
            <Typography
                color="secondary"
                style={{
                    fontSize: 40,
                    lineHeight: "46px"
                }}
                >
                SYSCO plattformer
            </Typography>
        </IconButton>
    </div>

    const Content = () => <React.Fragment>
        <div>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: 18,
                    lineHeight: "20.7px",
                }}
                >
                Trykk på navnet for informasjon om de resterende plattformene
            </Typography>
        </div>
        <Box
            position="absolute"
            top="393px"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            width="600px"
            >
            {platformList.map((platform, index) => (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={platform.width}
                    height="32px"
                    margin="auto"
                    marginTop={theme.typography.pxToRem(8)}
                    borderRadius="5px"
                    component="span"
                    style={{
                        backgroundColor: "#C4C4C4"
                    }}
                    key={index}
                    >
                    <ButtonOverlayWrapper title={platform.title} content={platform.content}/>
                    {/* <ButtonBase
                        >
                        <Typography
                            color="primary"
                            style={{
                                fontSize: 20,
                                lineHeight: "23.44px"
                            }}
                            >
                            {platform.title}
                        </Typography>
                    </ButtonBase> */}
                </Box>
            ))}
        </Box>
    </React.Fragment>

    const Component = () => <React.Fragment>
            <SyscoPage
                title={<Title/>}
                category="Brukerkontoer"
                icon={<AccountIcon/>}
                content={<Content/>}
                color="primary"
            />           
    </React.Fragment>
    
    return (
        <React.Fragment>
            <div className={classes.root}>
                    <Component/>
                </div>
        </React.Fragment>
    );
}