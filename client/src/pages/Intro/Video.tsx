import React from 'react';
import YouTube from 'react-youtube';

import { Redirect, useHistory } from 'react-router-dom';

interface Props {
    handleHasEnded: () => void;
};

export default function Video({handleHasEnded}: Props) {
    const videoCode = "oSY89RSi8UU";
    const history = useHistory();

    const handleOnEnd = () => history.push("/sysco-profile");

    return (
        <React.Fragment>
            <YouTube
                videoId={videoCode}
                containerClassName="embed embed-youtube"
                //onStateChange={(e) => checkElapsedTime(e)}
                opts={{ playerVars: { autoplay: 1 }}}
                onEnd={handleOnEnd}
            />
        </React.Fragment>
    );
}