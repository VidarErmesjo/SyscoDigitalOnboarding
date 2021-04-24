import React from "react";

import {
    IconButton,
	useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';
import { SyscoLogo } from './../Custom';

export default function Logo(props: any) {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                {...props}
                >
                {props => <IconButton style={props} disabled>
                    <SyscoLogo style={{ fontSize: 128, color: '#FFF' }}/>
                </IconButton>}
            </Spring>          
        </React.Fragment>
    );
}