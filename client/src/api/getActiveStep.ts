/*
*   Oversetter hovedkategorier til Route-vennlig format.
*/

import { config } from '.';

import { Zustand } from './../store';
import shallow from 'zustand/shallow';

export default function getActiveStep(step: number | undefined) {
    const output: string = "/" + config[step!]?.title.toLowerCase()?.replaceAll(' ','-');

    return output === "/undefined" ? "/" : output;
}
