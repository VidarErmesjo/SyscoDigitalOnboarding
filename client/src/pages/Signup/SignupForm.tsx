import React from 'react';

import {
    Button,
    createStyles,
    Grid,
    makeStyles,
    Theme
} from '@material-ui/core';

import {
    PlayCircleFilled as PlayCircle
} from '@material-ui/icons';

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

export default function SignupForm() {
    const signIn = Zustand.useStore(state => state.signIn);

    const classes = useStyles();

    const initialValues = {
        email: '',
    };
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Ugyldig inntasting!')
            .required('Hint: "navn.navnesen@sysco.no"'),
    });

    const onSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        setSubmitting(false);
        fetch('/api/signup').then((response) => {
            return response.json();
        }).then((payload) => {
        }).catch(error => {
            console.log(error);
        })
        signIn(values.email);
    };

    return (
        <React.Fragment>
            <Formik
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
            </Formik>
        </React.Fragment>
    );  
}