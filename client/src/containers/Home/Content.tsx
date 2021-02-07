import React, { useContext } from 'react';
import {
    AppBar,
    Card,
    CardContent,
    CardHeader,
    Container,
    createStyles,
    CssBaseline,
    Divider,
    Fab,
    Grid,
    IconButton,
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

import {
    Done as DoneIcon,
    DoneAll as DoneAllIcon,
    EmojiEmotions as EmojiEmotionsIcon,
    Gradient,
 } from '@material-ui/icons';

import { UserContext } from './../../UserContext';
import UserProgress from '../User/UserProgress';

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
        bottomBar: {
            margin: 0,
            padding: 0,
            border: 0,
            backgroundColor: theme.palette.background.default,
        },
        cardHeader: {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.secondary.dark,
        },
        cardContent: {
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.text.primary,
            textAlign: 'center',
            justifyContent: 'center',
        },
        content: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark,
            fontWeight: theme.typography.fontWeightBold,
            marginTop: theme.spacing(6),
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(6),
            marginLeft: theme.spacing(0),
        },
		paper: {
            margin: theme.spacing(2),
            textAlign: 'left',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.default,
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
		fabIconDisabled: {
			float: 'right',
			backgroundColor: theme.palette.error.dark,
			'&:hover': {
				backgroundColor: theme.palette.error.dark,
            },
            boxShadow: '0 4px 10px 0 rgba(255,255,255,.25)',
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

function ScrollToTop(props: any) {
    const { advance } = useContext(UserContext);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
          '#back-to-top-anchor',
        );
  
        if (anchor) 
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        advance();
    };

    return (
        <div onClick={handleClick}>
            {props.children}
        </div>
    );
};

export default function Content() {
    const classes = useStyles();
    const steps = getSteps();
    const { activeStep, advance, totalSteps } = useContext(UserContext);

    return (
        <React.Fragment>
            <Grid
                container
                //direction="row"
                //justify="space-evenly"
                //alignItems="baseline"
                spacing={2}
                xs={12}
                className={classes.content}
                >
                <Grid
                    item xs={12}
                    className={classes.paper}
                    style={{ textAlign: 'center', height: '70vh', maxHeight: '70vh' }}
                    >
                    <Fab
                        disabled={activeStep < totalSteps ? false : true}
                        onClick={advance}
                        className={classes.fabIcon}
                        >
                        <DoneIcon fontSize="large"/>
                    </Fab>
                    <Typography variant="h1">
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

                {/* <Grid item xs={5} className={classes.paper}>
                    <Typography variant="h6" style={{ color: '#FFF200'}}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.paper}>
                    <Typography color="textPrimary" variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.paper}>
                    <Typography color="secondary" variant="h6">
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Typography>
                </Grid>

                <Grid item xs={2} className={classes.paper}>
                    <Card square>
                        <CardHeader title="Happy Face" className={classes.cardHeader} style={{ textAlign: 'center' }}/>
                        <CardContent className={classes.cardContent}>
                            <EmojiEmotionsIcon style={{ fontSize: 128 }} color="secondary"/>
                        </CardContent>
                    </Card>
                </Grid>
  
                    <Grid item xs={4} className={classes.paper}>
                        <Typography color="textSecondary" variant="h5">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.paper}>
                        <Typography color="secondary" variant="caption">EMPTY</Typography>
                    </Grid>

                <Grid item xs={3} className={classes.paper}>
                    <Typography variant="body1" style={{ color: '#27F7FF' }}>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.                      
                    </Typography>
                </Grid>

                <Grid item xs={12} className={classes.bottomBar}>
                    <ScrollToTop>
                        <Fab
                            disabled={activeStep < totalSteps ? false : true}
                            //onClick={advance}
                            className={classes.fabIcon}
                            >
                            <DoneIcon fontSize="large"/>
                        </Fab>
                    </ScrollToTop>
                </Grid>
            </Grid> */}
            
        </React.Fragment>
    );
};