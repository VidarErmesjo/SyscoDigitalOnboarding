import React from "react";

import {
    SyscoCard,
    SyscoTextButtonBulleted
} from '../../components/Custom';

import {
    WavingPersonIcon
} from '../../components/Icons';

type Point = [number, number];

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
        <div>
            {bullets.map((bullet, index) => (
                <SyscoTextButtonBulleted
                    key={index}
                    value="Hvor får jeg bestilt datautstyr?"
                    offset={bullet.offset}
                />
            ))}
        </div>
    );
}

export default function FrequentlyAskedQuestions() {
    return (
        <React.Fragment>
            <SyscoCard
                color="secondary"
                heading="Ofte stiltes spørsmål til fadder"
                iconText="Fadder"
                icon={<WavingPersonIcon/>}
                content={<Content/>}
                />
        </React.Fragment>
    );
}