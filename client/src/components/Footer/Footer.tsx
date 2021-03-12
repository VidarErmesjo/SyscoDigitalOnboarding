import React from 'react';
import {
    Fade,
} from '@material-ui/core';

import { SessionContext } from '../../SessionProvider';
import Progress from '../Content/Progress';

export default function Footer(props: any) {
    const { user } = React.useContext(SessionContext);

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