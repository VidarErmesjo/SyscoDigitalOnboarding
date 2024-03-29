import React from 'react';

import {
    createStyles,
    CircularProgress,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Zustand } from './store';
import shallow from 'zustand/shallow';

import { Content } from 'components/Content'
import { Controls } from 'components/Controls';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import onboardingData from 'onboarding-data.json';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

			color: theme.palette.primary.main,
			backgroundColor: theme.palette.primary.main,
			height: '100vh',
            margin: 0,

            transition: theme.transitions.duration.enteringScreen + 'ms',
		},
        item: {
            width: '100vw',
        },
        circularProgress: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            color: theme.palette.secondary.main,
            zIndex: theme.zIndex.mobileStepper,
        },
	}),
);

export default function App() {
    const [user, data, setData, currentStep, getPage] = Zustand.useStore(state => [
        state.user,
        state.data,
        state.setData,
        state.currentStep,
        state.getPage
    ], shallow);

	// Låse scrolling
	document.body.style.overflow = 'hidden';

    // Last inn kursdata
    React.useEffect(() => {
        if(!data)
            fetch('/api/onboarding').then((response) => {
                // Bruk "lokal" backup hvis ikke OK-respons ;)
                if(!response.ok)
                    console.log("Using local backup data. ;)");

                return response.ok ? response.json() : JSON.parse(JSON.stringify(onboardingData));
            }).then((payload) => {
                setData(payload);
            }).catch(error => {
                console.log(error);
            })
    }, [user, data, setData]);

    const classes = useStyles();
    const theme = useTheme();

    const currentPage = React.useMemo(() => getPage(currentStep), [currentStep, getPage])

    // Svart bakgrunn på video og kart.
    const alternativeBackgroundColor = currentPage?.id.includes("video") || currentPage?.id.includes("kart");
    const backgroundColor = alternativeBackgroundColor ? theme.palette.background.default : theme.palette.primary.main;

    return (
        <React.Fragment>
            {data && data.categories.length > 0 ?
                <div
                    className={classes.root}
                    style={{
                        // Svart bakgrunn på innlogging.
                        backgroundColor: user ? backgroundColor : theme.palette.background.default
                    }}
                    >
                    <header className={classes.item}>
                        <Header/>
                    </header>
                    <main className={classes.item}>
                        <Content/>
                    </main>
                    <footer className={classes.item}>
                        {user && <Footer/>}
                    </footer>
                    {user && <Controls/>}
                </div>
                : <CircularProgress size={theme.spacing(10)} className={classes.circularProgress}/>}
        </React.Fragment>        
    );
}