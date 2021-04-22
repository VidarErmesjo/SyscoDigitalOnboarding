import React from 'react';

// MUI
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

// Route
import {
    Redirect,
    Route,
    useHistory,
} from 'react-router-dom';

// API
import shallow from 'zustand/shallow';
import { Zustand } from '../../store';
import { getActiveStep } from './../../api';

// Pages
import {
    Signup,
    Intro,
    Presentation,
    YourOffice,
    Onboarding,
    Security,
    Motivation,
    OurFocus,
    Outro
} from '../../pages';

import Figma1 from './../../pages/Presentation/Figma1';

// Usikker på denne. Flyttes?
import SyscoProfile from '../../pages/Intro/SyscoProfile';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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

export default function Content(props: any) {
    const [isLoading, user, currentStep] = Zustand.useStore(state => [
        state.isLoading,
        state.user,
        state.currentStep,
    ], shallow);

    const classes = useStyles();
    const theme = useTheme();

    // Hvis user === null => omdiriger browser til root.
    const history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
        }
    }, [user, history]);

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
                        : <Redirect to={getActiveStep(currentStep!)}/>}
                    </Route> 
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path={getActiveStep(0)} component={Intro}/>
                    <Route exact path={getActiveStep(1)} component={Presentation}/>
                    <Route exact path={getActiveStep(1) + "/1"} component={Figma1}/>
                    <Route exact path={getActiveStep(2)} component={YourOffice}/>
                    <Route exact path={getActiveStep(3)} component={Onboarding}/>
                    <Route exact path={getActiveStep(4)} component={OurFocus}/>
                    <Route exact path={getActiveStep(5)} component={Motivation}/>
                    <Route exact path={getActiveStep(6)} component={Outro}/>
                    <Route exact path={getActiveStep(7)} component={Done}/>
                    <Redirect to={getActiveStep(currentStep!)}/>                    
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