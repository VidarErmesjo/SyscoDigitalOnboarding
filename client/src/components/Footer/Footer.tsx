import React from 'react';
import {
    Fade,
} from '@material-ui/core';

import { SessionContext } from './../../SessionContext';
import SessionProgress from './../../containers/Session/SessionProgress';

export default function Footer() {
    const { session } = React.useContext(SessionContext);

    return (
        <React.Fragment>
            <Fade
                in={session}
                timeout={1000}
                >
                <SessionProgress/>
            </Fade>
        </React.Fragment>
    );
};