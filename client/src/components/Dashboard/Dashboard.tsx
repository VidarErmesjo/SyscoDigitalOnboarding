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
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.background.default,
			height: '100vh',
            margin: 0,
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
            <Grid
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
            </Grid>
        </React.Fragment>        
    );
}