import React from 'react';
import {
    Box,
    Container,
    createStyles,
    Fab,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from '@material-ui/core';

import {
    Done as DoneIcon,
 } from '@material-ui/icons';

import { UserContext } from './../../UserContext';
import UserProgress from '../User/UserProgress';

import background from './../../assets/SYSCO_SoMe_Profile_Picture.png';
//import background from './../../assets/SYSCO_logo_white_RGB.png';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        canvas:{

        },
        root: {
            margin: theme.spacing(6, 0, 6, 0),
        },
		background: {
            margin: theme.spacing(2),
            height: '70vh',
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.default,
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: 10,
        },
        stepper: {
            backgroundColor: theme.palette.primary.dark,
        },
		fabIcon: {
            float: 'right',
            bottom: 0,
			backgroundColor: theme.palette.secondary.main,
			'&:hover': {
				backgroundColor: theme.palette.secondary.dark,
            },
            boxShadow: '0 4px 10px 0 rgba(255,255,255,.25)',
        },
        feed: {
            backgroundColor: theme.palette.text.secondary,
            borderRadius: 10,
            height: '100%',
        },
	}),
);

function getSteps() {
    return ([
        'Intro',
        'Generisk presentasjon',
        'Tilpasset presentasjon',
        'Hva skjer når du er ansatt?',
        'Har du alt du trenger av kontoer?',
        'Noe motiverende for første dagen!',
        'Outro']
    );
};

export default function Content() {
    const classes = useStyles();
    const steps = getSteps();
    const { activeStep, advance, totalSteps } = React.useContext(UserContext);

    return (
        <React.Fragment>
            <Grid
                container
                spacing={2}
                className={classes.root}
                >
                <Grid
                    item xs={12}
                    className={classes.background}
                    >
                    <Fab
                        disabled={activeStep < totalSteps ? false : true}
                        onClick={advance}
                        className={classes.fabIcon}
                        >
                        <DoneIcon fontSize="large"/>
                    </Fab>
                    <Typography variant="h1" color="textPrimary">
                        {activeStep > 0 && activeStep < totalSteps - 1 ? "Side: " : "" }
                        {activeStep === 0 ? "Intro" : activeStep === totalSteps - 1 ? "Outro" : activeStep}
                    </Typography>
                    <Typography color="secondary" variant="h3">                    
                        {activeStep > 0 && activeStep < totalSteps - 1 ? steps[activeStep] : "" }
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12} 
                    className={classes.stepper}>
                    <UserProgress/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};