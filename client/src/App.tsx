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
    const [user, data, setData] = Zustand.useStore(state => [
        state.user,
        state.data,
        state.setData
    ], shallow);

	// Låse scrolling
	document.body.style.overflow = 'hidden';

    // Last inn kursdata
    React.useEffect(() => {
        if(!data)
            fetch('/api/onboarding').then((response) => {
                return response.json();
            }).then((payload) => {
                setData(payload);
            }).catch(error => {
                console.log(error);
            })

        return () => {}
    }, [user, data, setData]);

    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            {data && data.categories?.length! > 0 ?
                <div
                    className={classes.root}
                    //style={{ backgroundColor: user ? theme.palette.primary.main : theme.palette.background.default }}
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