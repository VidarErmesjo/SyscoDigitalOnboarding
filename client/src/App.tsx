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
import { getRoutes } from './api';
import { Content } from './components/Content'
import { Controls } from './components/Controls';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.default,
			height: '100vh',
            margin: 0,
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
    const [user, geoMap, setGeoMap] = Zustand.useStore(state => [
        state.user,
        state.geoMap,
        state.setGeoMap], shallow);

	// Låse scrolling
	document.body.style.overflow = 'hidden';

/*
    // Last inn kursdata
    React.useEffect(() => {
        fetch('/api/onboarding').then(response => {
            return response.json();
        }).then(payload => {
            //setData(payload)
            setData(routes);
        }).catch(error => {
            console.log(error);
        })

        return () => {}
    }, [user]);*/

    // Last inn kartdata
    React.useEffect(() => {
        if(!geoMap)
            fetch('/api/map').then(response => {
                return response.json();
            }).then(payload => {
                console.log(payload);
                setGeoMap(payload);
            }).catch(error => {
                console.log(error);
            })

        return () => {}
    }, [user]);

    const classes = useStyles();
    const theme = useTheme();

    /* TODO:
        I begynnelsen => Oversikt: "Det er X slides, det er Y antall deler og dette vil ta ca. Z minutter"
        Introvideo først?
        Stor kule (del) venstre med underpunkter mot høyre.
    */

    return (
        <React.Fragment>
            {geoMap
            ? <div className={classes.root}>
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