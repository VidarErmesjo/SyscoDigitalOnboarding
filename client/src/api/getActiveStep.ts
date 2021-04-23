/*
*   Oversetter hovedkategorier til Route-vennlig format.
*/

import { content } from '.';

import { Zustand } from './../store';
import shallow from 'zustand/shallow';

export default function getActiveStep(step: number | undefined) {
    const output: string = "/" + content[step!]?.title.toLowerCase()?.replaceAll(' ','-');

    return output === "/undefined" ? "/" : output;
}
