import React from 'react';
import clsx from 'clsx';

import {
    createStyles,
    IconButton,
    Grid,
    makeStyles,
    Theme,
    useMediaQuery,
    useTheme
} from '@material-ui/core';

import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import {
    useSpring,
    animated
} from 'react-spring';

import { Zustand } from './../../Zustand';
import { Content } from './../Content';
import { Footer } from './../Footer';
import { Header } from './../Header';

const chevronSize = 200;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 0,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.default,
			height: '100vh',
            margin: 0,
		},
		header: {
            backgroundColor: theme.palette.primary.main,
            position: 'fixed',
            top: 0,
			width: '100%',
            minHeight: theme.spacing(7),
            maxHeight: theme.spacing(7),
			zIndex: theme.zIndex.appBar,
		},
        chevron: {
            color: theme.palette.primary.main,
            fontSize: theme.typography.pxToRem(chevronSize),
            transition: theme.transitions.duration.short + 'ms',
            zIndex: theme.zIndex.mobileStepper,
            '&:hover': {
                color: theme.palette.text.primary,
            },
        },
        constrictedChevron: {
            fontSize: theme.typography.pxToRem(chevronSize * 0.5),
        },
		content: {
            position: 'relative',
            alignItems: 'center',
   			textAlign: 'center',
            height: 'auto',
			zIndex: 0,
            transformOrigin: 'center',
		},
		footer: {
			position: 'fixed',
            top: 'auto',
            bottom: 0,
			width: '100%',
            minHeight: theme.spacing(17),
            maxHeight: theme.spacing(17),
			zIndex: 100,
            backgroundColor: theme.palette.background.default,
		},
        constrictedFooter: {
            minHeight: theme.spacing(11),
            maxHeight: theme.spacing(11),
        },
        iconButton: {
            position: 'fixed',
            top: '50%',
            left: '50',
            marginTop: theme.typography.pxToRem(-chevronSize * 0.5),
            width: theme.typography.pxToRem(chevronSize),
            height: theme.typography.pxToRem(chevronSize),
        },
	}),
);

export default function Dashbord(props: any) {
    const [user, currentStep, totalSteps, nextStep, previousStep] = Zustand.useGlobalState((state: any) => [
        state.user,
        state.currentStep,
        state.totalStep,
        state.nextStep,
        state.previousStep
    ]);
    
    const classes = useStyles();
    const theme = useTheme();
    const headerBottom = document.getElementById('header')?.getClientRects()[0].height;
    const constricted = useMediaQuery('(max-width:666px)');
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: user !== null ? 1 : 0 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    // Håndterer skalering av innholdet
    const [size, setSize] = React.useState([0, 0]);
    const scale = window.innerWidth / window.screen.availWidth;
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();    
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    console.log(size?.[0], size?.[1]);

    return (
        <React.Fragment>
            <Grid
                container
                wrap="nowrap"
                className={classes.root}
                >
                <Grid
                    id="header"
                    item
                    xs={12}
                    className={classes.header}
                    >
                    <Header/>
                </Grid>
                <Grid
                    container
                    direction="row"
                    xs={12}
                    zeroMinWidth
                    >
                    <Grid
                        item
                        xs={1}
                        //zeroMinWidth
                        >
                        {user && <animated.div
                            style={style}
                            >
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
                                    />
                            </IconButton>
                        </animated.div>}
                    </Grid>
                    <Grid
                        id="content"
                        item 
                        xs={10}
                        justify="center"
                        alignContent="center"
                        zeroMinWidth
                        className={classes.content}
                        style={{ transform: `scale(${scale})` }}
                        >
                        <Content/>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        >
                        {user && <animated.div
                            style={style}
                            >
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
                                />
                            </IconButton>
                        </animated.div>}
                    </Grid>
                </Grid>
                {user != null && <Grid
                    id="footer"
                    item
                    xs={12}
                    className={clsx(classes.footer, {[classes.constrictedFooter]: constricted})}
                    >
                    <Footer/>
                </Grid>}
            </Grid>         
        </React.Fragment> 
    );
}