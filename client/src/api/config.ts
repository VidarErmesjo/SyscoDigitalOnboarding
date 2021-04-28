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
} from '../pages';

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
    CountryMap,
    Haugesund,
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

type SyscoDigitalOnboardingType = {
    id: string;
    title: string;
    component?: JSX.Element;
    pages?: SyscoDigitalOnboardingType;
}

export const config = [
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
                id: "generelt-om-sysco",
                title: "Generelt om SYSCO",
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
        pages: [
            {
                id: "0",
                title: "Forside",
                component: YourOffice,
            },
            {
                id: "1",
                title: "Kart",
                component: CountryMap,
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
        pages: [
            {
                id: "0",
                title: "Forside",
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
                title: "Step - By - Step",
                component: Onboarding6,
            },
            {
                id: "7",
                title: "Fadder - FAQ",
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
    // {
    //     id: "våre-satsingsområder",
    //     title: "Våre satsingsområder",
    //     pages: [
    //         {
    //             id: "0",
    //             title: "0",
    //             component: OurFocus,
    //         },
    //     ],
    // },
    {
        id: "motivasjon-for-ansatte",
        title: "Motivasjon for ansatte",
        pages: [
            {
                id: "0",
                title: "Forside",
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

export default config;

