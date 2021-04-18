/*
*   Oversetter hovedkategorier til Route-vennlig format.
*/

import { steps } from '.';

export default function getActiveStep(step: number) {
    const output: string = "/" + steps[step]?.toLowerCase()?.replace(' ','-');

    return output === "/undefined" ? "/" : output;
}
