import React from 'react';

import {
    Container,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    Redirect,
    Route,
    useHistory,
} from 'react-router-dom';

// Animation
import {
    animated,
    useSpring
} from 'react-spring';

import { Zustand } from '../../Zustand';
import { Signup } from '../../pages/Signup';
import { Intro } from '../../pages/Intro';
import { Part1 } from '../../pages/Part1';
import { Part2 } from '../../pages/Part2';
import { Part3 } from '../../pages/Part3';
import { Part4 } from '../../pages/Part4';
import { Part5 } from '../../pages/Part5';
import { Outro } from '../../pages/Outro';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
   		    textAlign: 'center',
			zIndex: 0,
            transformOrigin: 'center',
        },
    })
);

function Done() {
    return <Typography>Done!</Typography>
}

export function getActiveStep(step: number) {
    var name;
    switch(step) {
        case 0:
            name = "/intro"
            break;
        case 1:
            name = "/generisk-presentasjon"
            break;
        case 2:
            name = "/tilpasset-presentasjon"
            break;
        case 3:
            name = "/hva-skjer-naar-du-er-ansatt"
            break;
        case 4:
            name = "/har-du-alt-du-trenger-av-kontoer"
            break;
        case 5:
            name = "/noe-motiverende-for-foerste-dagen"
            break;
        case 6:
            name = "/outro"
            break;
        case 7:
            name = "/oppsummering"
            break;  
        default:
            name = "/"
            break;
    }
    return name
}

export default function Content(props: any) {
    const [user, currentStep] = Zustand.useStore((state: any) => [
        state.user,
        state.currentStep,
    ]);
    const classes = useStyles();
    const theme = useTheme();

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    // Hvis user === null => omdiriger browser til root.
    const history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
        }
    },[user, history]);

    const headerBottom = document.getElementById('header')?.getClientRects()[0].height;
    const scaleX = window.innerWidth / window.screen.availWidth;
    //const scaleY = window.innerHeight / window.screen.availHeight;

    return (
        <React.Fragment>
            <section
                id="feed"
                className={classes.root}
                style={{ top: headerBottom, transform: `scale(${scaleX})` }}
                //style={{ top: headerBottom, transform: `scale(${scaleX}, ${scaleY})` }}
                >
                <animated.div style={style}>
                <Route exact path="/">
                    {!user
                    ? <Signup/>
                    : <Redirect to={getActiveStep(currentStep)}/>}
                </Route> 
                <Route path={getActiveStep(0)} component={Intro}/>
                <Route path={getActiveStep(1)} component={Part1}/>
                <Route path={getActiveStep(2)} component={Part2}/>
                <Route path={getActiveStep(3)} component={Part3}/>
                <Route path={getActiveStep(4)} component={Part4}/>
                <Route path={getActiveStep(5)} component={Part5}/>
                <Route path={getActiveStep(6)} component={Outro}/>
                <Route path={getActiveStep(7)} component={Done}/>
                <Redirect to={getActiveStep(currentStep)}/>
                </animated.div>
            </section>
        </React.Fragment>
    );
}