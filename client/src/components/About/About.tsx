import React from 'react';

import {
    Backdrop,
    createStyles,
    Container,
    Dialog,
    Drawer,
    Fade,
    makeStyles,
    Modal,
    Theme,
    Typography,
} from '@material-ui/core';

import TransparentDrawer from './../Custom/TransparentDrawer';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
            backgroundColor: 'transparent',
		},
        paper: {
            backgroundColor: theme.palette.background.default,
            height: '100vh',
            borderStyle: 'solid',
			borderColor: theme.palette.primary.light,
            borderWidth: theme.spacing(0.25),
            borderBottom: 0,
            alignContent: 'center',
            textAlign: 'center',
        },
	}),
);

export default function About(props: any) {
    const classes = useStyles();
    const { open, toggle } = props;

    return (
        <React.Fragment>
            <TransparentDrawer
                anchor='bottom'
                open={open}
                onClick={toggle}
                //classes={{ paper: classes.drawer }}
                >
                <Container
                    maxWidth="md"
                    onClick={toggle}
                    className={classes.paper}
                    >
                    <Typography variant="h2" color="secondary">
                        Om oss
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                </Container>
            </TransparentDrawer>
        </React.Fragment>
    );
};