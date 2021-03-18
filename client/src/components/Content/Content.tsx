import React from 'react';
import clsx from 'clsx';
import {
    Container,
    createStyles,
    Fade,
    Grid,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import {
    Redirect,
    Route,
    useHistory,
} from 'react-router-dom';

import { Zustand } from '../../Zustand';

import { Signup } from '../../routes/Signup';
import { Intro } from '../../routes/Intro';
import { Part1 } from '../../routes/Part1';
import { Part2 } from '../../routes/Part2';
import { Part3 } from '../../routes/Part3';
import { Part4 } from '../../routes/Part4';
import { Part5 } from '../../routes/Part5';
import { Outro } from '../../routes/Outro';

const chevronSize = 200;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        chevron: {
            color: theme.palette.primary.main,
            fontSize: theme.typography.pxToRem(chevronSize),
            transition: theme.transitions.duration.short + 'ms',
            '&:hover': {
                color: theme.palette.text.primary,
            },
        },
        constrictedChevron: {
            fontSize: theme.typography.pxToRem(chevronSize * 0.5),
        },
        iconButton: {
            position: 'fixed',
            top: '50%',
            marginTop: theme.typography.pxToRem(-chevronSize * 0.5),
            width: theme.typography.pxToRem(chevronSize),
            height: theme.typography.pxToRem(chevronSize),
        },
        paper: {
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(2),
        },
    })
);

function Done() {
    return <Typography>Done!</Typography>
}

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

export default function Content() {
    const [user, currentStep, totalSteps, nextStep, previousStep] = Zustand.useGlobalState((state: any) => [
        state.user,
        state.currentStep,
        state.totalSteps,
        state.nextStep,
        state.previousStep
    ]);
    const classes = useStyles();
    const timeout = useTheme().transitions.duration.enteringScreen;
    const constricted = useMediaQuery('(max-width:666px)');

    // Hvis user === null => omdiriger browser til root.
    let history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
        }
    },[user, history]);

    return (
        <React.Fragment>
            <Route exact path="/">
                {!user
                ? <Signup/>
                : <Redirect to={getActiveStep(currentStep)}/>}
            </Route>            
            {user && <Grid
                container
                justify="center"
                alignItems="center"
                wrap="nowrap"
                >
                <Grid
                    item
                    xs={2}
                    zeroMinWidth
                    >
                    <Fade in={user !== null} timeout={timeout}>
                        <IconButton
                            onClick={previousStep}
                            disabled={currentStep < 1
                                ? true
                                : false}
                            color="secondary"
                            className={classes.iconButton}
                            style={{ left: 0 }}
                            >
                            <ChevronLeftIcon
                                className={clsx(classes.chevron, {[classes.constrictedChevron]: constricted})}
                                style={{ marginRight: chevronSize * 0.25 }}
                                />
                        </IconButton>
                    </Fade>
                </Grid>
                <Grid
                    item
                    xs={8}
                    zeroMinWidth
                    >
                    <React.Fragment

                        >
                        <Route path={getActiveStep(0)} component={Intro}/>
                        <Route path={getActiveStep(1)} component={Part1}/>
                        <Route path={getActiveStep(2)} component={Part2}/>
                        <Route path={getActiveStep(3)} component={Part3}/>
                        <Route path={getActiveStep(4)} component={Part4}/>
                        <Route path={getActiveStep(5)} component={Part5}/>
                        <Route path={getActiveStep(6)} component={Outro}/>
                        <Route path={getActiveStep(7)} component={Done}/>
                        <Redirect to={getActiveStep(currentStep)}/>
                    </React.Fragment>
                </Grid>
                <Grid
                    item
                    xs={2}
                    zeroMinWidth
                    >
                    <Fade in={user !== null} timeout={timeout}>
                        <IconButton
                            onClick={nextStep}
                            disabled={currentStep > totalSteps - 1
                                ? true
                                : false}
                            color="secondary"
                            className={classes.iconButton}
                            style={{ right: 0 }}
                            >
                            <ChevronRightIcon
                                className={clsx(classes.chevron, {[classes.constrictedChevron]: constricted})}
                                style={{ marginLeft: chevronSize * 0.25 }}
                            />
                        </IconButton>
                    </Fade>
                </Grid>
            </Grid>}
        </React.Fragment>
    );
};