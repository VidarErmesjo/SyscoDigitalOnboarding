import React from "react";

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoOverlay,
    SyscoPage,
    SyscoTextButtonBulleted
} from '../../../components/Custom';

import { WavingPersonIcon } from '../../../components/Icons'; 

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
    }),
);

function Overlay1() {
    return (
        <React.Fragment>
            <em>SYSCO består av flere mindre selskaper som alle sorterer under SYSCO paraplyen. SYSCO eies hovedsakelig av det norske investorselskapet Credo Partners med FERD den som største investor, i mindre grad av ansatte.</em>
        </React.Fragment>
    );
}

function Overlay2() {
    return (
        <React.Fragment>
            <em>Dersom noe har skjedd som du ikke ønsker å snakke med nærmeste leder om, kan du også ta direkte kontakt med verneombud eller direkte med HR via Kari Haaland Cheek.</em>
        </React.Fragment>
    );
}

function Overlay3() {
    return (
        <React.Fragment>
            <em>Det finnes ikke en endelig liste over hva en ansatt får dekket eller ikke. Det avklares med avdelingsleder før ansettelse hva du trenger i din stilling. Dersom du trenger noe mer for å utføre jobben din, avklares dette fortløpende med nærmeste leder. Det kan for eksempel være: kraftigere laptop, monitor, mus, tastatur, stol, øretelefoner, laptop sekk, nettbrett, ledninger, databriller, mm.</em>
        </React.Fragment>
    );
}

function Overlay4() {
    return (
        <React.Fragment>
            <em>For SYSCO, 15. for BICON eller 25. for SYSCO Finans.</em>
        </React.Fragment>
    );
}

function Overlay5() {
    return (
        <React.Fragment>
            <em>Det varierer fra tid til tid hvem som har ansvar for å gi tilgang til våre apper og tjenester. Ønsker du tilgang kan du spørre din nærmeste leder eller fadder hvem du bør kontakte.</em>
            <br/>
            <span>
                <strong>Utover Microsoft Office prorgammene kan eller skal du også få tilgang til:</strong>
                <br/><br/>
                <em>Wiki, Facebook Workplace, GitHub, Simployer, CV Partner, SYSCO Jira Service Desk, Visma Severa, Visma Expense, Slack, Confluence, Bitbucket, Jira, Trello, Udemy, Azure Portal, Azure DevOps, Kahoot, Peakon, og mer.</em>
            </span>
        </React.Fragment>
    );
}

function Overlay6() {
    return (
        <React.Fragment>
            <em>Alle ansatte blir automatisk meldt inn i forsikringsordningene til SYSCO.</em>
            <ul>
                <li>
                    <strong>Personforsikring: </strong>
                    <em>Personalforsikringen gir en viss økonomisk trygghet om noe uforutsett skulle skje i form av dødsfall, invaliditet og ervervsuførhet. Først og fremst er det inntektstap og merutgifter som blir erstattet i form av engangsbeløp. I tillegg gir forsikringen erstatninger ved medisinsk invaliditet, også kalt mènerstatning.</em>
                </li>
                <br/>
                <li>
                    <strong>Helseforsikring: </strong>
                    <em>Familiemedlemmer (ektefelle/samboer) kan også bli med i helseforsikringen. Sysco dekker da 50% av premien for fam.medlemmer.</em>
                </li>
                <br/>
                <li>
                    <strong>Reiseforsikring: </strong>
                    <em>Reiseforsikringen inkluderer familie og hjemmeboende barn inntil de fyller 21 år. I tillegg er det beskyttelse for avbestilling, om noe skulle oppstå.</em>
                </li>
                <br/>
                <li>
                    <strong>Kostnadsdekning av treningssenter/idrett: </strong>
                    <em>Selskapet dekker medlemskap i treningssenter el med inntil kr. 400 pr. måned. Det er en forutsetning at det trenes minimum 4 ganger i måneden og at det fremlegges dokumentasjon på treningsoppmøte.</em>
                </li>
            </ul>
        </React.Fragment>
    );
}

function Overlay7() {
    return (
        <React.Fragment>
            <em>Selskapet dekker utgifter til kjøp av mobiltelefon. Alle innkjøp avklares med nærmeste leder før anskaffelse. 1.gangs kjøp av mobiltelefon dekkes med inntil kr 8 000,-. Kjøp av ny telefon etter 1 år kr 2000, 2 år 4000, 3 år 6000 osv. Dvs. at det legges kr 2000,- i potten for hvert år, men maks refusjonsbeløp er kr 8000,-.</em>
        </React.Fragment>
    );
}

function Overlay8() {
    return (
        <React.Fragment>
            <em>De første ukene har fadderen din satt av ekstra tid til å svare på spørsmål, utover dette kan din nærmeste leder hjelpe til med å svare på spørsmål.</em>
        </React.Fragment>
    );
}

function Overlay9() {
    return (
        <React.Fragment>
            <em>Ja! Du kan få et SIM-kort med abonnement som dekkes av SYSCO og få dekket inntil 400,- per måned for internett hjemme.</em>
        </React.Fragment>
    );
}

function Overlay10() {
    return (
        <React.Fragment>
            <em>SYSCO dekker 30 min lunsj hver arbeidsdag. Noen ganger får ansatte dekket lunsj via kunden og prosjektet de jobber på. De fleste av SYSCO kontorene har en rimelig lunsj ordning, men man kan også ta med egen mat.</em>
        </React.Fragment>
    );
}

function Overlay11() {
    return (
        <React.Fragment>
            <em style={{fontSize: 40, textAlign: 'center'}}>Ja, mellom 09:00-15:00.</em>
        </React.Fragment>
    );
}

function Overlay12() {
    return (
        <React.Fragment>
            <p>SYSCO har opprettet Competency kanaler i Slack. Slack er en plattform hvor vi kommuniserer innad i Sysco.  Hver kanal har et tema og en competency lead. Dersom du har faglige eller tekniske spørsmål er disse kanalene et ypperlig sted å stille de. Dersom du ønsker å stille et spørsmål til en større gruppe, så blir også Facebook Workplace brukt. Dersom du er usikker på hvem eller hvor du bør stille et spørsmål, kan du kontakte nærmeste leder.</p>
            <strong>Slack Kanaler:</strong>
            <ul>
                <li>Data & Analytics #cgd_a</li>
                <li>Development #cgdev</li>
                <li>Integration #cgint</li>
                <li>Technical Architecture #cgta</li>
                <li>Platforms & operations #cgp_o</li>
                <li>Security #cgsec</li>
                <li>Cloud infrastructure #cgci</li>
                <li>Project management #cgpm</li>
                <li>Testing #cgtest</li>
                <li>Energy #cgenergy</li>
            </ul>
        </React.Fragment>
    );
}

type Point = [number, number];

interface IBulletPoints {
    value: string;
    offset: Point;
    content: JSX.Element | null | undefined;
}

// Posisjoner hentet fra Figma.
const bullets: IBulletPoints[] = [
    {
        value: "Hvordan er organisasjonsstrukturen i SYSCO?",
        offset: [157, 83] as Point,
        content: <Overlay1/>,
    },
    {
        value: "Hvem kan jeg kontakte hvis noe vanskelig har skjedd?",
        offset: [160, 602] as Point,
        content: <Overlay2/>,
    },
    {
        value: "Hvordan får jeg bestilt utstyr?",
        offset: [144, 1165] as Point,
        content: <Overlay3/>,
    },
    {
        value: "Når får jeg lønn?",
        offset: [243, 366] as Point,
        content: <Overlay4/>,
    },
    {
        value: "Hvordan får jeg tilgang til ulike apps eller systemer?",
        offset: [244, 872] as Point,
        content: <Overlay5/>,
    },
    {
        value: "Hvilke forsikringsordninger og helesegoder finnes?",
        offset: [342, 153] as Point,
        content: <Overlay6/>,
    },
    {
        value: "Hvordan skaffer jeg meg mobil?",
        offset: [332, 714] as Point,
        content: <Overlay7/>,
    },
    {
        value: "Hvem bør jeg kontakte hvis jeg har noen spørsmål?",
        offset: [448, 366] as Point,
        content: <Overlay8/>,
    },
    {
        value: "Dekkes mobilabonement og internett hjemme?",
        offset: [427, 940] as Point,
        content: <Overlay9/>,
    },
    {
        value: "Hvor lang lunsj er det, og får man dekket lunsjtid og mat?",
        offset: [561, 185] as Point,
        content: <Overlay10/>,
    },
    {
        value: "Er det kjernetid?",
        offset: [523, 797] as Point,
        content: <Overlay11/>,
    },
    {
        value: "Hvor kan jeg få faglig hjelp hvis jeg trenger det?",
        offset: [587, 951] as Point,
        content: <Overlay12/>,
    },
]

function ButtonOverlayWrapper({value, offset, content}: IBulletPoints) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const Title = () => <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <Typography
            color="textPrimary"
            style={{
                fontSize: 30,
                fontStyle: "italic",
                lineHeight: "34.5px",
                marginLeft: theme.spacing(8)
            }}
            >
            {value}
        </Typography>
    </Box>

    const Content = () => content!;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <SyscoTextButtonBulleted value={value} offset={offset} onClick={handleOpen}/>
            <SyscoOverlay
                open={open}
                title={<Title/>}
                content={<Content/>}
                handleClose={handleClose}
            />
        </React.Fragment>
    );
}

export default function Page7() {
    const classes = useStyles();

    const Content = () => <React.Fragment>
        {bullets.map((bullet, index) => <ButtonOverlayWrapper
            key={index}
            value={bullet.value}
            offset={bullet.offset}
            content={bullet.content}
        />)}
    </React.Fragment>

    const Component = (): JSX.Element =>  {
        return (
            <SyscoPage
                color="secondary"
                title="Ofte stiltes spørsmål til fadder"
                category="Fadder"
                icon={<WavingPersonIcon/>}
                content={<Content/>}            
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