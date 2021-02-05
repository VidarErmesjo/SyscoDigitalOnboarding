import React, {} from 'react';
import {
    AppBar,
    Container,
    createStyles,
    CssBaseline,
    Divider,
    Fab,
    Grid,
    makeStyles,
    Paper,
    Step,
    StepButton,
    StepLabel,
    Stepper,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';

import { Gradient } from '@material-ui/icons';

import Progress from './Progress';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
            //position: 'sticky',
            display: 'flex',
            flexGrow: 1,
			color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
            //marginTop: '2em',
            //top: '1vh',
            //top: 
            //bottom: '25vh',
        },
        appBar: {
            left: '10em',
            right: 'auto',
        },
        content: {
            marginTop: theme.spacing(8),
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(8),
            marginLeft: theme.spacing(2),
        },
		paper: {
			padding: theme.spacing(),
            textAlign: 'center',
            justifyContent: 'center',
			backgroundColor: theme.palette.primary.dark,
        },
        stepper: {
            //position: 'fixed',
            //width: '100vw',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark,
        },
		fabIcon: {
			float: 'right',
			backgroundColor: theme.palette.secondary.light,
			'&:hover': {
				backgroundColor: theme.palette.secondary.dark,
			},
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
    const elevation = 4;

    return (
        <React.Fragment>
            <Grid container spacing={4} className={classes.content}>
                <Grid item xs={12} className={classes.stepper}>
                    <Progress/>
                </Grid>

                <Grid item xs={6}>EMPTY</Grid>
                <Grid item xs={6}>
                    <Paper elevation={elevation} className={classes.paper}>
                        <Typography color="textPrimary" variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={elevation} className={classes.paper}>
                        <Typography color="secondary" variant="h6">
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>EMPTY</Grid>
                <Grid item xs={3}>ALSO EMPTY</Grid>
                <Grid item xs={12}>
                    <Fab className={classes.fabIcon}>
                        OK
                    </Fab>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};