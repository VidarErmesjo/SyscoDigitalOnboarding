import React from 'react';

import {
    createStyles,
    CircularProgress,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Zustand } from '../../store';
import shallow from 'zustand/shallow';
import { Content } from './../Content';
import { Controls } from './../Controls';
import { Footer } from './../Footer';
import { Header } from './../Header';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
            display: 'flex',
            flex: '0 0 column',
            justifyContent: 'center',
            alignItems: 'center',

			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.default,
			height: '100vh',
            margin: 0,
		},
        container: {
            display: 'flex',
            flex: `0 0 column`,
            justifyContent: 'center',
            alignItems: 'center',
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

export default function Dashbord(props: any) {
    const [user, data, setData, geoMap, setGeoMap] = Zustand.useStore(state => [
        state.user,
        state.data,
        state.setData,
        state.geoMap,
        state.setGeoMap], shallow);

    // Last inn kursdata
    React.useEffect(() => {
        fetch('/api/onboarding').then(response => {
            return response.json();
        }).then(payload => {
            setData(payload);
        }).catch(error => {
            console.log(error);
        })
        return () => {}
    }, [user]);

    // Last inn kartdata
    React.useEffect(() => {
        fetch('/api/map').then(response => {
            return response.json();
        }).then(payload => {
            setGeoMap(payload);
        }).catch(error => {
            console.log(error);
        })

        return () => {}
    }, [user]);
       
    const classes = useStyles();

    const theme = useTheme();

    return (
        <React.Fragment>
            {data && geoMap
            ? <div className={classes.root}>
                <header className={classes.item}>
                    <Header/>
                </header>
                <section className={classes.item}>
                    <Content/>
                </section>
                <footer className={classes.item}>
                    {user && <Footer/>}
                </footer>
                {user && <Controls/>}
            </div>
            : <CircularProgress size={theme.spacing(10)} className={classes.circularProgress}/>}
        </React.Fragment>        
    );
}