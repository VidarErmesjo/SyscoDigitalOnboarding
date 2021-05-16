import React from 'react';

import {
    Button,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import {
    PlayCircleFilled as PlayCircle
} from '@material-ui/icons';

import { Spring } from 'react-spring/renderprops';

import {
    Formik,
    Form,
    FormikHelpers
} from 'formik';

import { Zustand } from '../../store';
import * as Yup from 'yup';
import TextField from './TextFieldWrapper';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        form: {
            '& > *': {
                marginTop: theme.spacing(3),               
            },
        },
        textField: {
            '& > *': {
                marginRight: theme.spacing(2),
            },
        },
    }),
);

interface Values {
    email: string;
}

export default function SignupForm(props: any) {
    const signIn = Zustand.useStore(state => state.signIn);

    const classes = useStyles();
    const theme = useTheme();

    const initialValues = {
        email: '',
    };
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Ugyldig brukernavn!').required('Vennligs skriv inn gyldig brukernavn.'),
    });

    const onSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        setSubmitting(false);
        fetch('/api/signup').then((response) => {
            return response.json();
        }).then((payload) => {
            console.log(payload);
        }).catch(error => {
            console.log(error);
        })
        signIn(values.email);
    };

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {() => <Formik
                    initialValues={{...initialValues}}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    >
                    <Form className={classes.form}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                            <Grid
                                item
                                xs={12}
                                zeroMinWidth
                                >
                                <TextField
                                    name="email"
                                    label="SYSCO epost"
                                    placeholder="navn.navnesen@sysco.no"
                                    color="secondary"
                                    variant="outlined"
                                    size="small"
                                    className={classes.textField}                                
                                />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    startIcon={<PlayCircle/>}
                                    type="submit"
                                    >
                                    Start
                                </Button>              
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>}
            </Spring>
                {/* <Formik
                    initialValues={{...initialValues}}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    >
                    <Form className={classes.form}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                            <Grid
                                item
                                xs={12}
                                zeroMinWidth
                                >
                                <TextField
                                    name="email"
                                    label="SYSCO epost"
                                    placeholder="navn.navnesen@sysco.no"
                                    color="secondary"
                                    variant="outlined"
                                    size="small"
                                    className={classes.textField}
                                
                                />
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    startIcon={<PlayCircle/>}
                                    type="submit"
                                    className={classes.button}
                                    >
                                    Start
                                </Button>              
                            </Grid>
                        </Grid>
                    </Form>
                </Formik> */}
        </React.Fragment>
    );  
}