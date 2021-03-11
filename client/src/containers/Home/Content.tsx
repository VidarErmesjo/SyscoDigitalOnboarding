import React from 'react';
import {
    createStyles,
    Fade,
    Grid,
    IconButton,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import {
    Redirect,
    Route,
    useHistory
} from 'react-router-dom';

import { SessionContext } from '../../SessionContext';

//import ProtectedRoute from './../../components/Custom/ProtectedRoute';

import Login from "./../Session/Login"; // StartSession?
import Intro from "./../../routes/Intro/Intro";
import Part1 from "./../../routes/Part1/Part1";
import Part2 from "./../../routes/Part2/Part2";
import Part3 from "./../../routes/Part3/Part3";
import Part4 from "./../../routes/Part4/Part4";
import Part5 from "./../../routes/Part5/Part5";
import Outro from "./../../routes/Outro/Outro";

import background from './../../assets/SYSCO_SoMe_Profile_Picture.png';
//import background from './../../assets/SYSCO_logo_white_RGB.png';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        chevron: {
            color: theme.palette.primary.light,
            fontSize: 48,
        }
    })
);

function Done() {
    return <Typography>Done!</Typography>
}

export default function Content() {
    const classes = useStyles();
    const { session, activeStep, totalSteps, nextStep, previousStep } = React.useContext(SessionContext);
    const timeout = 1000;

    function getActiveStep(step: number) {
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
    };

    let history = useHistory();
    React.useEffect(() => {
        if(!session) {
            history.replace("/");
        }
    },[session]);

    return (
        <React.Fragment>
            <Route exact path="/">
                {!session
                ? <Login/>
                : <Redirect to={getActiveStep(activeStep)}/>}
            </Route>
            {session && <Grid
                container
                direction="row"
                >
                <Grid item xs={1}>
                    <Fade in={session} timeout={timeout}>
                        <IconButton
                            onClick={previousStep}
                            disabled={activeStep < 1 ? true : false}
                            >
                            <ChevronLeftIcon fontSize="large" className={classes.chevron}/>
                        </IconButton>
                    </Fade>
                </Grid>
                <Grid item xs={session? 10 : 12}>
                    <Route path={getActiveStep(0)} component={Intro}/>
                    <Route path={getActiveStep(1)} component={Part1}/>
                    <Route path={getActiveStep(2)} component={Part2}/>
                    <Route path={getActiveStep(3)} component={Part3}/>
                    <Route path={getActiveStep(4)} component={Part4}/>
                    <Route path={getActiveStep(5)} component={Part5}/>
                    <Route path={getActiveStep(6)} component={Outro}/>
                    <Route path={getActiveStep(7)} component={Done}/>
                    <Redirect to={getActiveStep(activeStep)}/>
                </Grid>
                <Grid item xs={1}>
                    <Fade in={session} timeout={timeout}>
                        <IconButton
                            onClick={nextStep}
                            disabled={activeStep > totalSteps - 1 ? true : false}
                            >
                            <ChevronRightIcon fontSize="large" className={classes.chevron}/>
                        </IconButton>
                    </Fade>
                </Grid>
            </Grid>}
        </React.Fragment>
    );
};