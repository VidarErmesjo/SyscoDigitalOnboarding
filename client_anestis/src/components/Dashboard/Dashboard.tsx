import React from 'react';

import {
    createStyles,
    Grid,
    makeStyles,
    Theme
} from '@material-ui/core';

import { Zustand } from './../../Zustand';
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
	}),
);

// Håndterer skalering av innholdet
export function useWindowSize() {
    const [size, setSize] = React.useState([0, 0]);

    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();    
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

export default function Dashbord(props: any) {
    const user = Zustand.useStore((state: any) => state.user);    
    const classes = useStyles();

    useWindowSize();

    return (
        <React.Fragment>
            <div className={classes.root}>
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
            {/* <Grid
                container
                className={classes.root}
                >
                <Grid item xs={12}>
                    <Header/>
                </Grid>                
                <Grid item xs={12}>
                    <Content/>
                </Grid>
                {user &&  <React.Fragment>
                    <Grid item xs={12}>
                        <Footer/>
                    </Grid>
                    <Controls/>
                </React.Fragment>}
            </Grid> */}
        </React.Fragment>        
    );
}