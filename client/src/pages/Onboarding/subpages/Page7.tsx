import React from "react";

import {
    createStyles,
    makeStyles,
    PropTypes,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoModal,
    SyscoOverlay,
    SyscoPage,
    SyscoTextButtonBulleted
} from '../../../components/Custom';

import {
    WavingPersonIcon
} from '../../../components/icons'; 

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

function Overlay6() {
    return (
        <React.Fragment>
            <Typography color="secondary">
                <em>Alle ansatte blir automatisk meldt inn i forsikringsordningene til SYSCO.</em>
            </Typography>
        </React.Fragment>
    );
}

type Point = [number, number];

// Posisjoner hentet fra Figma.
const bullets: IBulletPoints[] = [
    {
        value: "Hvordan er organisasjonsstrukturen i SYSCO?",
        offset: [157, 83] as Point,
        variant: "small",
    },
    {
        value: "Hvordan får jeg tilgang til ulike apps?",
        offset: [162, 618] as Point,
        variant: "small",
    },
    {
        value: "Hvordan får jeg bestilt utstyr?",
        offset: [136, 1065] as Point,
        variant: "small",
    },
    {
        value: "Når får jeg lønn?",
        offset: [243, 366] as Point,
        variant: "small",
    },
    {
        value: "Hvordan får jeg tilgang til ulike apps eller systemer?",
        offset: [244, 872] as Point,
        variant: "small",
    },
    {
        value: "Hvilke forsikringsordninger og helesegoder finnes?",
        offset: [342, 153] as Point,
        variant: "large",
        component: Overlay6,
    },
    {
        value: "Hvordan skaffer jeg meg mobil?",
        offset: [332, 714] as Point,
        variant: "small",
    },
    {
        value: "Hvem bør jeg kontakte hvis jeg har noen spørsmål?",
        offset: [448, 366] as Point,
        variant: "small",
    },
    {
        value: "Dekker SYSCO mobilabonement og internett hjemme?",
        offset: [427, 940] as Point,
        variant: "small",
    },
    {
        value: "Er det kjernetid?",
        offset: [523, 797] as Point,
        variant: "small",
    },
    {
        value: "Hvor lang lunsj er det, og får man dekket lunsjtid og mat?",
        offset: [561, 185] as Point,
        variant: "small",
    },
    {
        value: "Hvor kan jeg få faglig hjelp hvis jeg trenger det?",
        offset: [587, 951] as Point,
        variant: "large",
    },
]

interface IBulletPoints {
    value: string;
    offset: Point;
    variant: "small" | "large";
    component?: React.ComponentType<JSX.Element> | null | undefined;
}

function ButtonOverlayWrapper({value, offset, variant, component}: IBulletPoints) {
    const [open, setOpen] = React.useState(false);

    const theme = useTheme();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);//setTimeout(() => setOpen(false), theme.transitions.duration.standard);

    return (
        <React.Fragment>
            <SyscoTextButtonBulleted value={value} offset={offset} onClick={handleOpen}/>
            <SyscoOverlay
                open={open}
                variant={variant}
                title={value}
                content={component}
                handleClose={handleClose}
            />
        </React.Fragment>
    );
}

function Content() {
    return (
        <React.Fragment>
            {bullets.map((bullet, index) => <ButtonOverlayWrapper
                key={index}
                value={bullet.value}
                offset={bullet.offset}
                variant={bullet.variant}
                component={bullet.component}
            />)}
        </React.Fragment>
    );
}

export default function Page7() {
    const classes = useStyles();
    const theme = useTheme();

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
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div className={classes.root} style={props}><Component/></div>}
            </Spring>
        </React.Fragment>
    );
}