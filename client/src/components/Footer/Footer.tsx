import React from 'react';
import {
    Fade
} from '@material-ui/core';

import { Zustand } from '../../Zustand';
import { Progress } from '../Progress';

export default function Footer(props: any) {
    const user = Zustand.useGlobalState((state: any) => state.user);

    return (
        <React.Fragment>
            <Fade
                in={user !== null}
                timeout={1000}
                >
                <Progress {...props}/>
            </Fade>
        </React.Fragment>
    );
};