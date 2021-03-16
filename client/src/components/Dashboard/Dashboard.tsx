import React from 'react';

import {
    createStyles,
    Grid,
    makeStyles,
    Theme
} from '@material-ui/core';

import { Content } from './../Content';
import { Footer } from './../Footer';
import { Header } from './../Header';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexGrow: 0,
			color: theme.palette.primary.main,
			backgroundColor: theme.palette.primary.dark,
			height: '100vh',
            margin: 0,
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
                    className={classes.root}
                    >
                    <Grid id="header"
                        item
                        xs={12} // Setter full bredde (for alle)
                        className={classes.header}
                        >
                        <Header/>
                    </Grid>
                    <Grid id="content"
                        item
                        xs
                        className={classes.content}
                        >
                        <Content/>
                    </Grid>
                    <Grid id="footer"
                        item
                        xs
                        className={classes.footer}
                        >
                        <Footer/>
                    </Grid>
                </Grid>         
        </React.Fragment> 
    );
}