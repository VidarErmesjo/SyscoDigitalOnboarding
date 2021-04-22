/*
*   Oversetter hovedkategorier til Route-vennlig format.
*/

import { steps } from '.';

import { Zustand } from './../store';
import shallow from 'zustand/shallow';

export default function getActiveStep(step: number | undefined) {
    const output: string = "/" + steps[step!]?.toLowerCase()?.replaceAll(' ','-');

    return output === "/undefined" ? "/" : output;
}
