import React from 'react';

import {
    createStyles,
    Grid,
    makeStyles,
    Theme
} from '@material-ui/core';

import { Content} from './../Content';
import { Header } from './../Header';
import { Footer } from './../Footer';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 0,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.primary.dark,
			height: '100vh',
		},
		header: {
			backgroundColor: theme.palette.primary.main,
			width: '100%',
			height: theme.spacing(7),
			zIndex: 2,
		},
		content: {
			width: 'fit-content',
			height: 'fit-content',
			textAlign: 'center',
			zIndex: 0,
		},
		footer: {
			position: 'fixed',
			backgroundColor: theme.palette.primary.dark,
			width: '100%',
			height: 'auto',
			bottom: 0,
			zIndex: 1,
		},
	}),
);

export default function Dashbord() {
    const classes = useStyles();
    return (
        <React.Fragment>
                <Grid
                    container
                    justify="flex-start"
                    alignItems="flex-start"
                    className={classes.root}
                    >
                    <Grid id="header"
                        item
                        xs={12}
                        className={classes.header}
                        >
                        <Header/>
                    </Grid>
                    <Grid id="content"
                        item
                        xs={12}
                        className={classes.content}
                        >
                        <Content/>
                    </Grid>
                    <Grid id="footer"
                        item
                        xs={12} 
                        className={classes.footer}
                        >
                        <Footer/>
                    </Grid>
                </Grid>         
        </React.Fragment> 
    );
}