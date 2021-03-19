import React from 'react';
import clsx from 'clsx';

import {
    createStyles,
    Grid,
    makeStyles,
    Theme,
    useMediaQuery
} from '@material-ui/core';

import { Zustand } from './../../Zustand';
import { Content } from './../Content';
import { Footer } from './../Footer';
import { Header } from './../Header';

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
		content: {
            position: 'relative',
            left: 0,
   			textAlign: 'center',
            height: 'auto',
			zIndex: 0,
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
	}),
);

export default function Dashbord() {
    const user = Zustand.useGlobalState((state: any) => state.user);
    const classes = useStyles();
    const headerBottom = document.getElementById("header")?.getClientRects()[0].height;
    const constricted = useMediaQuery('(max-width:666px)');

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
                        id="content"
                        item
                        xs={12}
                        className={classes.content}
                        style={{ top: headerBottom }}
                        >
                        <Content/>
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