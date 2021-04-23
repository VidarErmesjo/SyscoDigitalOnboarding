import React from "react";

import { useTheme } from '@material-ui/core';

import {
    SyscoCard,
    SyscoTextButtonBulleted
} from './../../components/Custom';

import {
    WavingPersonIcon
} from './../../components/Icons';

type Point = [number, number];

// Posisjoner hentet fra Figma.
const bullets = [
    {
        offset: [166, 139] as Point,
    },
    {
        offset: [182, 687] as Point,
    },
    {
        offset: [156, 1134] as Point,
    },
    {
        offset: [263, 435] as Point,
    },
    {
        offset: [264, 941] as Point,
    },
    {
        offset: [362, 222] as Point,
    },
    {
        offset: [350, 701] as Point,
    },
    {
        offset: [459, 565] as Point,
    },
    {
        offset: [447, 1009] as Point,
    },
    {
        offset: [581, 254] as Point,
    },
    {
        offset: [555, 884] as Point,
    },
]

function Content() {
    return (
        <React.Fragment>
            {bullets.map((bullet, index) => (
                <SyscoTextButtonBulleted
                    key={index}
                    value="Hvor får jeg bestilt datautstyr?"
                    offset={bullet.offset}
                />
            ))}
        </React.Fragment>
    );
}

export default function FrequentlyAskedQuestions(props: any) {
    const theme = useTheme();

    return (
        <React.Fragment>
            <SyscoCard
                color="secondary"
                title="Ofte stiltes spørsmål til fadder"
                category="Fadder"
                icon={<WavingPersonIcon/>}
                content={<Content/>}            
                />
        </React.Fragment>
    );
}