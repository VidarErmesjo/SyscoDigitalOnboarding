import React, {} from 'react';
import {
    AppBar,
    Container,
    createStyles,
    CssBaseline,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
            position: 'absolute',
			display: 'flex',
			color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
            //top: '1vh',
            top: 'auto',
            //bottom: '25vh',
        },
        appBar: {
            top: '50%',
        },
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}),
);

export default function Content() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar variant="dense">
                <Container fixed>
                    <Typography color="textPrimary" variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Container>
            </Toolbar>
        </div>
    );
};