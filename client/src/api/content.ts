/*
*   Modifikasjoner her vil gi endringer i programmets flyt of innhold.
*/

// Hovedkategorier
import {
    Intro,
    Presentation,
    YourOffice,
    Onboarding,
    Motivation,
    OurFocus,
    Outro
} from './../pages';

// Del 2
import { EmptyPage } from './../pages/Presentation';

export const content = [
    {
        id: "introduksjonsvideo",
        title: "Introduksjonsvideo",
        pages: [
            {
                id: "spill-av",
                title: "Spill av",
                component: Intro,
            },
        ],
    },
    {
        id: "dette-er-sysco",
        title: "Dette er SYSCO",
        pages: [
            {
                id: "0",
                title: "0",
                component: Presentation,    // Dette skal være forsiden!
            },
            {
                id: "1",
                title: "1",
                component: EmptyPage,            // ... så neste side
            },
            {
                id: "2",
                title: "2",
                component: null,            // osv
            },
            {
                id: "3",
                title: "3",
                component: null,
            },
            {
                id: "4",
                title: "4",
                component: null,
            },
            {
                id: "5",
                title: "5",
                component: null,
            },
            {
                id: "6",
                title: "6",
                component: null,
            },
            {
                id: "7",
                title: "7",
                component: null,
            },
            {
                id: "8",
                title: "8",
                component: null,
            },
            {
                id: "9",
                title: "9",
                component: null,
            },
        ],
    },
    {
        id: "din-avdeling",
        title: "Din avdeling",
        pages: [
            {
                id: "kart",
                title: "Kart",
                component: YourOffice,
            },
            {
                id: "stord",
                title: "Stord",
                component: null,
            },
            {
                id: "bergen",
                title: "Bergen",
                component: null,
            },
            {
                id: "haugesund",
                title: "Haugesund",
                component: null,
            },
            {
                id: "stavanger",
                title: "Stavanger",
                component: null,
            },
            {
                id: "oslo",
                title: "Oslo",
                component: null,
            },
            {
                id: "ølen",
                title: "Ølen",
                component: null,
            },
        ],
    },
    {
        id: "onboarding",
        title: "Onboarding",
        pages: [
            {
                id: "0",
                title: "0",
                component: Onboarding,
            },
            {
                id: "1",
                title: "1",
                component: null,
            },
            {
                id: "2",
                title: "2",
                component: null,
            },
            {
                id: "3",
                title: "3",
                component: null,
            },
            {
                id: "4",
                title: "4",
                component: null,
            },
            {
                id: "5",
                title: "5",
                component: null,
            },
            {
                id: "6",
                title: "6",
                component: null,
            },
            {
                id: "7",
                title: "7",
                component: null,
            },
            {
                id: "8",
                title: "8",
                component: null,
            },
            {
                id: "9",
                title: "9",
                component: null,
            },
            {
                id: "10",
                title: "10",
                component: null,
            },
        ],
    },
    {
        id: "våre-satsingsområder",
        title: "Våre satsingsområder",
        pages: [
            {
                id: "0",
                title: "0",
                component: OurFocus,
            },
        ],
    },
    {
        id: "motivasjon-for-ansatte",
        title: "Motivasjon for ansatte",
        pages: [
            {
                id: "0",
                title: "0",
                component: Motivation,
            },
            {
                id: "1",
                title: "1",
                component: null,
            },
            {
                id: "2",
                title: "2",
                component: null,
            },
            {
                id: "3",
                title: "3",
                component: null,
            },
            {
                id: "4",
                title: "4",
                component: null,
            },
            {
                id: "5",
                title: "5",
                component: null,
            },
            {
                id: "6",
                title: "6",
                component: null,
            },
        ],
    },
    {
        id: "avsluttning",
        title: "Avsluttning",
        pages: [
            {
                id: "0",
                title: "0",
                component: Outro,
            },
            {
                id: "1",
                title: "1",
                component: null,
            },
            {
                id: "2",
                title: "2",
                component: null,
            },
        ],
    },
];

export default content;

