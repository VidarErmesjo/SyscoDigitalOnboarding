import React from 'react';

import { Redirect, Route } from 'react-router-dom';

import {
    Container,
    createStyles,
    makeStyles,
    useTheme,
    Theme,
    Typography
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring';


import Video from './Video';
import SyscoProfile from './SyscoProfile';

export default function Intro(props: any) {
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
             <animated.div style={style}>
                    <Video/>
                    {/* {!done
                    ? <Video handleHasEnded={handleHasEnded}/>
                    : <SyscoProfile/>} */}
                    {/* <Route path="/sysco-profile" component={SyscoProfile}/> */}
            </animated.div>
        </React.Fragment>
    );
};