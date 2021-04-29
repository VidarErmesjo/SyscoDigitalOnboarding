import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoPage,
    SyscoTextButtonBulleted
} from '../../../components/Custom';

import {
    WavingPersonIcon
} from '../../../components/Icons';

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

type Point = [number, number];

type BulletProps = {
    value: string;
    offset: Point;
}

// Posisjoner hentet fra Figma.
const bullets: BulletProps[] = [
    {
        value: "Hvordan er organisasjonsstrukturen i SYSCO?",
        offset: [157, 83] as Point,
    },
    {
        value: "Hvordan får jeg tilgang til ulike apps?",
        offset: [162, 618] as Point,
    },
    {
        value: "Hvordan får jeg bestilt utstyr?",
        offset: [136, 1065] as Point,
    },
    {
        value: "Når får jeg lønn?",
        offset: [243, 366] as Point,
    },
    {
        value: "Hvordan får jeg tilgang til ulike apps eller systemer?",
        offset: [244, 872] as Point,
    },
    {
        value: "Hvilke forsikringsordninger og helesegoder finnes?",
        offset: [342, 153] as Point,
    },
    {
        value: "Hvordan skaffer jeg meg mobil?",
        offset: [332, 714] as Point,
    },
    {
        value: "Hvem bør jeg kontakte hvis jeg har noen spørsmål?",
        offset: [448, 366] as Point,
    },
    {
        value: "Dekker SYSCO mobilabonement og internett hjemme?",
        offset: [427, 940] as Point,
    },
    {
        value: "Er det kjernetid?",
        offset: [523, 797] as Point,
    },
    {
        value: "Hvor lang lunsj er det, og får man dekket lunsjtid og mat?",
        offset: [561, 185] as Point,
    },
    {
        value: "Hvor kan jeg få faglig hjelp hvis jeg trenger det?",
        offset: [587, 951] as Point,
    },
]

function Content() {
    return (
        <React.Fragment>
            {bullets.map((bullet, index) => (
                <SyscoTextButtonBulleted
                    key={index}
                    value={bullet.value}
                    offset={bullet.offset}
                    onClick={(event) => alert(event.target)}
                />
            ))}
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