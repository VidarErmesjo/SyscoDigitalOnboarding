import React from 'react';

import {
    Backdrop,
    CircularProgress,
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
import SyscoProfile from '../../pages/Intro/SyscoProfile';
import { Part1 } from '../../pages/Part1';
import { CountryMap } from '../../pages/CountryMap';
import { FrequentlyAskedQ } from '../../pages/FrequentlyAskedQ';
import { Part4 } from '../../pages/Part4';
import { Part5 } from '../../pages/Part5';
import { Outro } from '../../pages/Outro';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            //position: 'relative',

            display: 'flex',
            //flex: `0 0 row`,
            justifyContent: 'center',
            alignItems: 'center',

            /*borderColor: '#FF0000',
            borderWidth: 1,
            borderStyle: 'solid',*/

            /*position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            transform: `translate(-50%, -50%)`,
            textAlign: 'center',
            width: '80vw',*/
            //height: '80vh',
			zIndex: 0,
        },
        circularProgress: {
            color: theme.palette.secondary.main,
            zIndex: theme.zIndex.mobileStepper,
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
    const [isLoading, user, currentStep] = Zustand.useStore((state: any) => [
        state.isLoading,
        state.user,
        state.currentStep,
    ]);
    const classes = useStyles();
    const theme = useTheme();

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
            <div
                id="feed"
                //fixed
                className={classes.root}
                >
                {!isLoading ? <React.Fragment>
                    <Route exact path="/">
                        {!user
                        ? <Signup/>
                        : <Redirect to={getActiveStep(currentStep)}/>}
                    </Route> 
                    <Route path="/sysco-profile" component={SyscoProfile}/>
                    <Route path={getActiveStep(0)} component={Intro}/>
                    <Route path={getActiveStep(1)} component={Part1}/>
                    <Route path={getActiveStep(2)} component={CountryMap}/>
                    <Route path={getActiveStep(3)} component={FrequentlyAskedQ}/>
                    <Route path={getActiveStep(4)} component={Part4}/>
                    <Route path={getActiveStep(5)} component={Part5}/>
                    <Route path={getActiveStep(6)} component={Outro}/>
                    <Route path={getActiveStep(7)} component={Done}/>
                    <Redirect to={getActiveStep(currentStep)}/>                    
                </React.Fragment>
                :
                <CircularProgress
                    size={theme.spacing(10)}
                    className={classes.circularProgress}
                />}
            </div>
        </React.Fragment>
    );
}