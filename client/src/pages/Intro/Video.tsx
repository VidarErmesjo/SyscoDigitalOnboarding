import React from 'react';

import { useTheme } from '@material-ui/core';

import YouTube from 'react-youtube';

import { useHistory } from 'react-router-dom';

import { Spring } from 'react-spring/renderprops';

export default function Video() {
    const videoCode = "oSY89RSi8UU";

    const theme = useTheme();

    const history = useHistory();
    const handleOnEnd = () => alert("Video ended!");// history.push("/sysco-profile");

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div style={props}><YouTube
                    videoId={videoCode}
                    containerClassName="embed embed-youtube"
                    opts={{ playerVars: { autoplay: 1 }}}
                    onEnd={handleOnEnd}
                /></div>}
            </Spring>
        </React.Fragment>
    );
}