import React from 'react';

import {
    Typography,
    useTheme
} from '@material-ui/core';

import { useSpring, animated } from 'react-spring';

export default function Outro() {
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
            <animated.div style={style}>
                <div>
                    <Typography color="textPrimary">
                        {[...new Array(666)]
                            .map(
                            () => `Outro.`,
                            ).join('\n')}
                    </Typography>
                </div>
            </animated.div>
        </React.Fragment>
    );
};