import React from 'react';
import {
    Fade,
} from '@material-ui/core';

import { SessionContext } from '../../SessionProvider';
import Progress from '../Content/Progress';

export default function Footer() {
    const { user } = React.useContext(SessionContext);

    return (
        <React.Fragment>
            <Fade
                in={user}
                timeout={1000}
                >
                <Progress/>
            </Fade>
        </React.Fragment>
    );
};