import React from 'react';

import { useTheme } from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

import { Zustand } from '../../Zustand';
import { Progress } from '../Progress';

export default function Footer(props: any) {
    const user = Zustand.useGlobalState((state: any) => state.user);
    const theme = useTheme();

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: user !== null ? 1 : 0 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
            <animated.div
                style={style}
                {...props}
                >
                <Progress/>
            </animated.div>
        </React.Fragment>
    );
}