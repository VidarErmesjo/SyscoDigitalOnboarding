import React from 'react';

import { useTheme } from '@material-ui/core';

import YouTube from 'react-youtube';

import { useHistory } from 'react-router-dom';

import { animated, useSpring } from 'react-spring';

export default function Video() {
    const videoCode = "oSY89RSi8UU";

    const theme = useTheme();

    const history = useHistory();

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    const handleOnEnd = () => history.push("/sysco-profile");

    return (
        <React.Fragment>
            <animated.div style={style}>
                <YouTube
                    videoId={videoCode}
                    containerClassName="embed embed-youtube"
                    //onStateChange={(e) => checkElapsedTime(e)}
                    opts={{ playerVars: { autoplay: 1 }}}
                    onEnd={handleOnEnd}
                />
            </animated.div>
        </React.Fragment>
    );
}