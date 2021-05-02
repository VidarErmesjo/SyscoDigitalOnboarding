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
    Outro
} from '../pages';

import { Video } from './../pages/Intro/subpages';

// Del 2 - "Presentasjon"
import {
    Page1 as Presentation1,
    Page2 as Presentation2,
    Page3 as Presentation3,
    Page4 as Presentation4,
    Page5 as Presentation5,
    Page6 as Presentation6,
    Page7 as Presentation7,
    Page8 as Presentation8,
    Page9 as Presentation9
} from '../pages/Presentation/subpages';

// Del 3 - "Ditt kontor"
import {
    Bergen,
    Haugesund,
    Norway,
    Ølen,
    Oslo,
    Stavanger,
    Stord
} from '../pages/YourOffice/subpages';

// Del 4 - "Onboarding""
import {
    Page1 as Onboarding1,
    Page2 as Onboarding2,
    Page3 as Onboarding3,
    Page4 as Onboarding4,
    Page5 as Onboarding5,
    Page6 as Onboarding6,
    Page7 as Onboarding7,
    Page8 as Onboarding8,
    Page9 as Onboarding9,
    Page10 as Onboarding10,
} from '../pages/Onboarding/subpages';

// Del 5 - "Motiverende for ansatte"
import {
    Page1 as Motivation1,
    Page2 as Motivation2,
    Page3 as Motivation3,
    Page4 as Motivation4,
    Page5 as Motivation5,
    Page6 as Motivation6,
} from '../pages/Motivation/subpages';

export const root = "/sysco-digital-onboarding";

export type RouteNode = {
    id: string | undefined;
    title: string | undefined;
    component?: React.ComponentType<JSX.Element> | null | undefined;
    pages?: RouteNode[];
}

export const config: RouteNode[] = [
    {
        id: "introduksjon",
        title: "Introduksjon",
        component: Intro,
        pages: [
            {
                id: "0",
                title: "Introduksjon",
                component: Intro,
            },
            {
                id: "1",
                title: "Introduksjonsvideo",
                component: Video,
            },
        ],
    },
    {
        id: "dette-er-sysco",
        title: "Dette er SYSCO",
        component: Presentation,
        pages: [
            {
                id: "0",
                title: "Dette er SYSCO",
                component: Presentation,
            },
            {
                id: "1",
                title: "1",
                component: Presentation1,
            },
            {
                id: "2",
                title: "2",
                component: Presentation2,
            },
            {
                id: "3",
                title: "3",
                component: Presentation3,
            },
            {
                id: "4",
                title: "4",
                component: Presentation4,
            },
            {
                id: "5",
                title: "5",
                component: Presentation5,
            },
            {
                id: "6",
                title: "6",
                component: Presentation6,
            },
            {
                id: "7",
                title: "7",
                component: Presentation7,
            },
            {
                id: "8",
                title: "8",
                component: Presentation8,
            },
            {
                id: "9",
                title: "9",
                component: Presentation9,
            },
        ],
    },
    {
        id: "din-avdeling",
        title: "Din avdeling",
        component: YourOffice,
        pages: [
            {
                id: "0",
                title: "Din avdeling",
                component: YourOffice,
            },
            {
                id: "1",
                title: "Kart",
                component: Norway,
            },
            {
                id: "stord",
                title: "Stord",
                component: Stord,
            },
            {
                id: "bergen",
                title: "Bergen",
                component: Bergen,
            },
            {
                id: "haugesund",
                title: "Haugesund",
                component: Haugesund,
            },
            {
                id: "stavanger",
                title: "Stavanger",
                component: Stavanger,
            },
            {
                id: "oslo",
                title: "Oslo",
                component: Oslo,
            },
            {
                id: "ølen",
                title: "Ølen",
                component: Ølen,
            },
        ],
    },
    {
        id: "onboarding",
        title: "Onboarding",
        component: Onboarding,
        pages: [
            {
                id: "0",
                title: "Onboarding",
                component: Onboarding,
            },
            {
                id: "1",
                title: "1",
                component: Onboarding1,
            },
            {
                id: "2",
                title: "2",
                component: Onboarding2,
            },
            {
                id: "3",
                title: "3",
                component: Onboarding3,
            },
            {
                id: "4",
                title: "4",
                component: Onboarding4,
            },
            {
                id: "5",
                title: "5",
                component: Onboarding5,
            },
            {
                id: "6",
                title: "6",
                component: Onboarding6,
            },
            {
                id: "7",
                title: "7",
                component: Onboarding7,
            },
            {
                id: "8",
                title: "8",
                component: Onboarding8,
            },
            {
                id: "9",
                title: "9",
                component: Onboarding9,
            },
            {
                id: "10",
                title: "10",
                component: Onboarding10,
            },
        ],
    },
    {
        id: "motivasjon-for-ansatte",
        title: "Motivasjon for ansatte",
        component: Motivation,
        pages: [
            {
                id: "0",
                title: "Motivasjon for ansatte",
                component: Motivation,
            },
            {
                id: "1",
                title: "1",
                component: Motivation1,
            },
            {
                id: "2",
                title: "2",
                component: Motivation2,
            },
            {
                id: "3",
                title: "3",
                component: Motivation3,
            },
            {
                id: "4",
                title: "4",
                component: Motivation4,
            },
            {
                id: "5",
                title: "5",
                component: Motivation5,
            },
            {
                id: "6",
                title: "6",
                component: Motivation6,
            },
        ],
    },
    {
        id: "avsluttning",
        title: "Avsluttning",
        component: Outro,
        pages: [
            {
                id: "0",
                title: "Avsluttning",
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

export default config;

