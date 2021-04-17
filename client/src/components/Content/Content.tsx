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
import { Zustand } from '../../Zustand';
import { getActiveStep } from './../../api';

// Pages
import {
    Signup,
    Intro,
    Presentation,
    YourOffice,
    Onboarding,
    Security,
    OurFocus,
    Outro
} from '../../pages';

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
                    <Route path={getActiveStep(1)} component={Presentation}/>
                    <Route path={getActiveStep(2)} component={YourOffice}/>
                    <Route path={getActiveStep(3)} component={Onboarding}/>
                    <Route path={getActiveStep(4)} component={Security}/>
                    <Route path={getActiveStep(5)} component={OurFocus}/>
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