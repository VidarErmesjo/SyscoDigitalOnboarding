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
    SyscoOverlay
} from '../../../components/Custom';

import {
    AssignmentIcon,
    UpRightArrowIcon
} from '../../../components/icons';

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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        item: {
            width: '100%',
        },
        syscoBox: {
            position: 'absolute',
            backgroundColor: `rgba(42, 52, 63, 0.91)`,
            width: 625,
            height: 600,
        },
        listButton: {
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                transform: `scale(1.2)`,
                marginLeft: theme.spacing(4),
            },
        },
    })
);

function Overlay1() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="305px"
                    height="172px"
                    left="48px"
                    top="117px"                    
                    >
                    <strong>Denne delene består av:</strong>
                    <ul>
                        <li>Secure Policy Statement</li>
                        <li>Forbud mot diskriminering</li>
                        <li>Code of conduct</li>
                        <li>Refusjonsregler</li>
                        <li>Med mere</li>
                    </ul>
                </Box>
                <Box
                    position="absolute"
                    width="507px"
                    height="139px"
                    left="327px"
                    top="117px"
                    >
                    <strong>Hvilke utgifter kan jeg spørre om refusjon for?</strong>
                    <br/><br/>
                    Det er ikke fastsatt alle ting du kan spørre om refusjon for, men alle refusjoner må avtales med nærmeste leder på forhånd. SYSCO dekker de fleste utgifter relatert til jobb, i tillegg dekker SYSCO også 50% av utgiftene relatert til norskkurs og gebyrer fra UDI.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay2() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 15,
                    lineHeight: "17px",
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="682px"
                    height="68px"
                    left="70px"
                    top="115px"
                    >
                    <em>
                        Som medarbeider vil du i noen situasjoner kunne bli kjent med personopplysninger knyttet til dine kollegaer, våre kunder og partnere.
                        <br/><br/><br/>
                        Eksempler på slike personopplysninger er opplysninger om navn, adresse, mobilnummer, fravær, fagforeningsmedlemskap, betalingsvansker og trekk i lønn. Slike opplysninger kan fremgå av e-poster, bli gjort tilgjengelig på intranett, i vårt CRM system, HR system og andre interne løsninger. 
                        <br/><br/>
                        Det er viktig at du behandler personopplysninger i samsvar med reglene om personvern
                    </em>
                </Box>


            </Typography>
        </React.Fragment>
    );
};

function Overlay3() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="305px"
                    height="172px"
                    left="62px"
                    top="108px"                    
                    >
                    <strong>Prøvetid</strong>
                    <br/><br/>
                    Arbeidstaker ansettes med seks måneders prøvetid med gjensidig oppsigelsesfrist på 2 uker i prøvetiden, med mindre annet fremgår i ansettelseskontrakten. 
                </Box>
                <Box
                    position="absolute"
                    width="365px"
                    height="277px"
                    left="430px"
                    top="108px"
                    >
                    <strong>Taushetsplikt</strong>
                    <br/><br/>
                    Den ansatte forplikter seg under ansettelsestiden og etter arbeidsforholdets opphør til å avstå fra å avsløre noe informasjon i enhver betydning angående Selskapet
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay4() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="360px"
                    height="172px"
                    left="57px"
                    top="111px"                    
                    >
                    <strong>Samtale leder og medarbeider</strong>
                    <br/><br/>
                    Leder skal gjennomføre 1:1 samtaler med sine medarbeidere 1 gang per måned. Formålet med samtalene er å ha en tett og god dialog, sparre og gi gjensidig coaching.                </Box>
                <Box
                    position="absolute"
                    width="347px"
                    height="277px"
                    left="445px"
                    top="111px"
                    >
                    <strong>Temaer kan være:</strong>
                    <ul>
                        <li>Hvordan har du det?</li>
                        <li>Hva trenger du hjelp til - mer av og mindre av?</li>
                        <li>Med mer</li>
                    </ul>
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay5() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="400px"
                    height="172px"
                    left="34px"
                    top="104px"                    
                    >
                    <strong>Alminnelig arbeidstid</strong>
                    <br/><br/>
                    For SYSCO AS og Bicon: Den alminnelige arbeidstiden er 7,5 timer per dag og 37,5 timer per uke. I tillegg kommer 0,5 times lunsj daglig.
                    For SYSCO Finans: Den alminnelige arbeidstiden er 7,5 timer inklusiv 0,5 time lunsj.
                </Box>
                <Box
                    position="absolute"
                    width="378px"
                    height="277px"
                    left="453px"
                    top="104px"
                    >
                    <strong>Arbeidstid på spesielle dager</strong>
                    <br/><br/>
                    For Sysco : Julaften, nyttårsaften og onsdag før skjærtorsdag er fri med lønn.For Sysco Finans: Julaften er fri med lønn. Nyttårsaften er det 4 timers arbeidsdag. For Bicon: Julaften og nyttårsaften er fri med lønn.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay6() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="546px"
                    height="272px"
                    left="157px"
                    top="100px"
                    >
                    <strong>Generelit om permisjon</strong>
                    <br/><br/>
                    Det må varsles så tidlig som mulig om forestående permisjoner slik at næremeste leder kan planlegge gjennomføringen. 
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay7() {
    return (
        <React.Fragment>
        </React.Fragment>
    );
};

function Overlay8() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="410px"
                    height="266px"
                    left="32px"
                    top="100px"                    
                    >
                    <strong>Utbetaling</strong>
                    <br/><br/>
                    Lønn utbetales etterskuddsvis normalt den 5. hver måned. Dersom den 5. ikke er en virkedag, skal lønn i utgangspunktet være klar til utbetaling virkedagen før. Om dette eventuelt ikke skulle skje, sendes det epost i god tid i forkant. Det trekkes halv skatt på novemberlønn.
                </Box>
                <Box
                    position="absolute"
                    width="368px"
                    height="277px"
                    left="476px"
                    top="100px"
                    >
                    <strong>Lønnsfastsettelse</strong>
                    <br/><br/>
                    Arbeidstakers lønn fremgår av ansettelseskontrakten som inngås ved oppstart av arbeidsforholdet. Eventuelle endringer i lønn skal gjenspeiles i eget lønnsbrev,  eventuelt i et vedlegg til ansettelseskontrakten.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay9() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="358px"
                    height="215px"
                    left="32px"
                    top="100px"                    
                    >
                    <strong>Mobil</strong>
                    <br/><br/>
                    Selskapet dekker utgifter til kjøp av mobiltelefon og gjeldende abonnement - inntil 3GB datatrafikk (Phonero). Alle innkjøp avklares med nærmeste leder før anskaffelse.1.gangs kjøp av mobiltelefon dekkes med inntil kr 8 000,-.
                </Box>
                <Box
                    position="absolute"
                    width="358px"
                    height="215px"
                    left="433px"
                    top="100px"
                    >
                    <strong>Treningsavtale</strong>
                    <br/><br/>
                    Selskapet dekker medlemskap i treningssenter el med inntil kr. 400 pr. måned. Det er en forutsetning at det trenes minimum 4 ganger i måneden og at det fremlegges dokumentasjon på treningsoppmøte. 
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay10() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 19,
                    lineHeight: '21.85px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="357px"
                    height="215px"
                    left="30px"
                    top="93px"                    
                    >
                    <strong>Refusjon</strong>
                    <br/><br/>
                    Ansatte som er på tjenestereise i oppdrag for selskapet, får refundert reise- og oppholdsutgifter etter regning. Refusjoner skal dokumenteres med originalbilag som vedlegges reiseregningen.
                </Box>
                <Box
                    position="absolute"
                    width="425px"
                    height="215px"
                    left="416px"
                    top="93px"
                    >
                    <strong>Reisetid</strong>
                    <br/><br/>
                    Reisetid ut over ordinær arbeidstid som ikke kan faktureres kunde, avspaseres time for time. Det kan ikke føres reisetid til og fra kurs og andre kompetansehevende arrangementer der hovedmålet er egenutvikling/kompetanseutvikling, med mindre deltagelsen er pålagt fra arbeidsgiver.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay11() {
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 15,
                    lineHeight: '17.25px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="630px"
                    height="168px"
                    left="75px"
                    top="91px"                    
                    >
                    <strong>SYSCO følger ferieloven, men SYSCO AS og Energy X har i tillegg tre dager ekstra fri: </strong>
                    <br/><br/>
                    <ul>
                        <li>Onsdagen før Skjærtorsdag</li>
                        <li>Julaften 24.12</li>
                        <li>Nyttårsaften 31.12</li>
                    </ul>
                    <br/>
                    Søknad om ferie skal avtales med nærmeste leder og prosjektleder (hvis relevant). Deretter skal den registreres i Visma Severa. Ferie kan kun tas ut i hele dager, ikke timebasert. Feriesøknad for hovedferien skal leveres senest innen 1.mai.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay12() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 15,
                    lineHeight: '17.25px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="502px"
                    height="auto"
                    left="145px"
                    top="156px" 
                    paddingLeft={theme.spacing(0.5)}
                    borderLeft={theme.spacing(1)}
                    borderColor={theme.palette.secondary.main}                   
                    >
                    Når du er syk må du si ifra til nærmeste leder og prosjektleder. Deretter registreres dette på et eget prosjekt i Visma Severa.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay13() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 15,
                    lineHeight: '17.25px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="502px"
                    height="auto"
                    left="145px"
                    top="120px" 
                    paddingLeft={theme.spacing(0.5)}
                    borderLeft={theme.spacing(1)}
                    borderColor={theme.palette.secondary.main}                   
                    >
                    Arbeidstaker som har omsorg for barn, har rett til permisjon for nødvendig tilsyn med barnet når det er sykt. Permisjonsretten gjelder til og med det kalenderåret barnet fyller 12 år. Det er en forutsetning for rett til permisjon at fraværet er nødvendig for å ha omsorg for barnet. Rett til permisjon foreligger også når den som har det daglige barnetilsynet er syk, eller hvis barnet skal følges til legeundersøkelse eller annen oppfølging i forbindelse med sykdom. Rutinekontroller og behov for oppfølging av barnet utover helsetjenester, vil altså ikke omfattes av denne bestemmelsen.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

function Overlay14() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Typography
                style={{
                    fontSize: 15,
                    lineHeight: '17.25px',
                    textShadow: 'none'
                }}
                >
                <Box
                    position="absolute"
                    width="502px"
                    height="auto"
                    left="145px"
                    top="156px" 
                    paddingLeft={theme.spacing(0.5)}
                    borderLeft={theme.spacing(1)}
                    borderColor={theme.palette.secondary.main}                   
                    >
                    Etter arbeidsmiljøloven er arbeidstaker forpliktet til å følge opp de tiltak som igangsettes for å forbedre arbeidsmiljøet, samt delta i det organiserte verne- og miljøarbeidet. Arbeidstaker skal også medvirke til å forhindre arbeidsulykker og samtidig melde fra om dette til arbeidsgiver og verneombud.
                </Box>
            </Typography>
        </React.Fragment>
    );
};

type ListItem = {
    title: string;
    content: JSX.Element;
}

const leftContent: ListItem[] = [
    {
        title: "Overordnede retningslinjer",
        content: <Overlay1/>,
    },
    {
        title: "Personvern",
        content: <Overlay2/>,
    },
    {
        title: "Ansettelse",
        content: <Overlay3/>,
    },
    {
        title: "Medarbeiderutvikling",
        content: <Overlay4/>,
    },
    {
        title: "Arbeid og overtid",
        content: <Overlay5/>,
    },
    {
        title: "Permisjon",
        content: <Overlay6/>,
    },
    {
        title: "Pensjon",
        content: <Overlay7/>,
    },
]

const rightContent: ListItem[] = [
    {
        title: "Lønn og permisjon",
        content: <Overlay8/>,
    },
    {
        title: "Personalgoder",
        content: <Overlay9/>,
    },
    {
        title: "Tjenestereiser",
        content: <Overlay10/>,
    },
    {
        title: "Ferie",
        content: <Overlay11/>,
    },
    {
        title: "Arbeidstakers sykdom",
        content: <Overlay12/>,
    },
    {
        title: "Barns sykdom",
        content: <Overlay13/>,
    },
    {
        title: "Helse, miljø og sikkerhet",
        content: <Overlay14/>,
    },
]

interface IListButton {
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ListButton({value, onClick}: IListButton) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <IconButton
                disableRipple
                onClick={onClick}
                className={classes.listButton}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
                >
                <Typography
                    color="textPrimary"
                    style={{ fontSize: '35px', lineHeight: '40.25px' }}
                    >
                    {value}
                </Typography>
                <UpRightArrowIcon color="secondary" style={{ marginLeft: theme.spacing(1) }}/>
            </IconButton>
        </React.Fragment>
    );
}


function ButtonOverlayWrapper({title, content}: ListItem) {
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Title = () => <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
        <Typography style={{
                fontSize: 30,
                lineHeight: '34,5px',
                textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`
            }}>
            {title}
        </Typography>
        <UpRightArrowIcon color="secondary" style={{ marginLeft: theme.spacing(1) }}/>
    </Box>

    const Content = () => content!;

    return (
        <React.Fragment>
            <ListButton value={title} onClick={handleOpen}/>
            <SyscoOverlay
                open={open}
                title={<Title/>}
                content={<Content/>}
                handleClose={handleClose}
            />
        </React.Fragment>
    );
}

interface ISyscoBox {
    listItem: ListItem[];
}

function SyscoBox({listItem}: ISyscoBox) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.syscoBox}>
            <ul style={{
                    color: theme.palette.secondary.main,
                    listStyle: `square`,
                    fontSize: "40px",
                    marginTop: theme.spacing(8)
                }}
                >
                {listItem.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            marginLeft: theme.spacing(4),
                            marginBottom: theme.spacing(0.5)
                        }}>
                        <ButtonOverlayWrapper title={item.title} content={item.content}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Content() {
    const classes = useStyles();

    return (
        <span className={classes.content}>
            <Box
                position="absolute"
                left="98px"
                top="137px"
                >
                <SyscoBox listItem={leftContent}/>
            </Box>
            <Box
                position="absolute"
                left="785px"
                top="137px"
                >
                <SyscoBox listItem={rightContent}/>
            </Box>
        </span>
    );
}

export default function Page10() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
        <Typography
            color="textPrimary"
            style={{ fontSize: 40, lineHeight: '46px' }}
            >
            Personalhåndboka oppsummert
        </Typography>
        <AssignmentIcon
            color="inherit"
            fontSize="large"
            style={{ marginLeft: theme.spacing(2) }}
        />
    </Box>

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={<Title/>}
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