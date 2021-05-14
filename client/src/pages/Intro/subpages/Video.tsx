import React from 'react';
import YouTube from 'react-youtube';
import {
    createStyles,
    makeStyles,
    Theme,
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import { Zustand } from '../../../store';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
    })
);

export default function Video() {
    const classes = useStyles();
    const [nextStep] = Zustand.useStore(state => [state.nextStep]);

    const handleOnEnd = () => nextStep();

    const Component = (): JSX.Element => {
        const videoCode = "oSY89RSi8UU";
        return (
            <YouTube
                videoId={videoCode}
                containerClassName="embed embed-youtube"
                opts={{ playerVars: { autoplay: 1 }}}
                onEnd={handleOnEnd}
            />
        );
    }

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                >
                {props => <div className={classes.root} style={props}>
                    <Component/>
                </div>}
            </Spring>
        </React.Fragment>
    );
};