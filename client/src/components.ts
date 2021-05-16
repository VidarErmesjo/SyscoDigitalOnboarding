import React from 'react';

// Hovedkategorier
import {
    Intro,
    Presentation,
    YourOffice,
    Onboarding,
    Motivation,
    Outro
} from './pages';

// Del 1 - "Introduksjon"
import { Video } from './pages/Intro/subpages';

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
} from './pages/Presentation/subpages';

// Del 3 - "Ditt kontor"
import {
    Bergen,
    BergenOffice,
    Haugesund,
    HaugesundOffice,
    Norway,
    Ølen,
    ØlenOffice,
    Oslo,
    OsloOffice,
    Stavanger,
    StavangerOffice,
    Stord,
    StordOffice
} from './pages/YourOffice/subpages';

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
} from './pages/Onboarding/subpages';

// Del 5 - "Motiverende for ansatte"
import {
    Page1 as Motivation1,
    Page2 as Motivation2,
    Page3 as Motivation3,
    Page4 as Motivation4,
    Page5 as Motivation5,
    Page6 as Motivation6,
} from './pages/Motivation/subpages';

interface ICompontents {
    [key: string]: React.ComponentType<JSX.Element>
}

// Her defineres alle sidene.
const Components: ICompontents = {
    intro: Intro,
    video: Video,
    presentation: Presentation,
    presentation1: Presentation1,
    presentation2: Presentation2,
    presentation3: Presentation3,
    presentation4: Presentation4,
    presentation5: Presentation5,
    presentation6: Presentation6,
    presentation7: Presentation7,
    presentation8: Presentation8,
    presentation9: Presentation9,
    yourOffice: YourOffice,
    norway: Norway,
    bergen: Bergen,
    bergenOffice: BergenOffice,
    haugesund: Haugesund,
    haugesundOffice: HaugesundOffice,
    ølen: Ølen,
    ølenOffice: ØlenOffice,
    oslo: Oslo,
    osloOffice: OsloOffice,
    stavanger: Stavanger,
    stavangerOffice: StavangerOffice,
    stord: Stord,
    stordOffice: StordOffice,
    onboarding: Onboarding,
    onboarding1: Onboarding1,
    onboarding2: Onboarding2,
    onboarding3: Onboarding3,
    onboarding4: Onboarding4,
    onboarding5: Onboarding5,
    onboarding6: Onboarding6,
    onboarding7: Onboarding7,
    onboarding8: Onboarding8,
    onboarding9: Onboarding9,
    onboarding10: Onboarding10,
    motivation: Motivation,
    motivation1: Motivation1,
    motivation2: Motivation2,
    motivation3: Motivation3,
    motivation4: Motivation4,
    motivation5: Motivation5,
    motivation6: Motivation6,
    outro: Outro
}

export default Components;
