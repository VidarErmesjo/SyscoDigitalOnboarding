import React from 'react';

import {
    Button,
    createStyles,
    Fade,
    Grid,
    makeStyles,
    Theme,
} from '@material-ui/core';

import {
    PlayCircleFilled as PlayCircle
} from '@material-ui/icons';

import {
    Formik,
    Form,
    FormikHelpers
} from 'formik';

import { Zustand } from './../../Zustand';
import * as Yup from 'yup';
import TextField from './TextFieldWrapper';
import SyscoTextField from './../../components/Custom/SyscoTextField';

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
    const signIn = Zustand.useGlobalState((state: any) => state.signIn);
    const classes = useStyles();

    const initialValues = {
        email: '',
    };
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Ugyldig epost!').required('Vennligs skriv inn gyldig SYSCO epost.'),
    });

    const onSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        setTimeout(() => {
            signIn(values.email);
            setSubmitting(false);
        }, 500)
    };

    return (
        <React.Fragment>
            <Formik
                initialValues={{...initialValues}}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                <Fade in={true} timeout={1000}>
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
                </Fade>
            </Formik>
        </React.Fragment>
    );  
}