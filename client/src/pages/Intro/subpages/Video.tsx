import React from 'react';
import YouTube, { Options } from 'react-youtube';
import {
    createStyles,
    makeStyles,
    Theme
} from '@material-ui/core';

import { Zustand } from 'store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            zIndex: 1000000,
        },
    })
);

export default function Video() {
    const [nextStep] = Zustand.useStore(state => [state.nextStep]);
    const classes = useStyles();

    const opts: Options = {
        width: '1268',
        height: '671',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleOnEnd = () => nextStep();

    const Component = () => {
        const videoCode = "oSY89RSi8UU";
        return (
            <YouTube
                videoId={videoCode}
                containerClassName="embed embed-youtube"
                opts={opts}
                onEnd={handleOnEnd}
            />
        );
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Component/>
            </div>
        </React.Fragment>
    );
}