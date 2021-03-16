import React from 'react';

import {
    Box,
    Button,
    createStyles,
    Fade,
    Grid,
    makeStyles,
    Theme
} from '@material-ui/core';

import {
    PlayCircleFilled as PlayCircle
} from '@material-ui/icons';

import {
    Formik,
    Field,
    FieldProps,
    Form,
    FormikHelpers,
    useFormik
} from 'formik';

import { Zustand } from './../../Zustand';
import * as Yup from 'yup';
import TextField from './TextField';
import Spacer from './../../components/Custom/Spacer';
import CustomTextField from './../../components/Custom/CustomTextField';
import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            '& label.Mui-focused': {
                color: theme.palette.secondary.main,
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: theme.palette.secondary.main,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.secondary.dark,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.secondary.light,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.secondary.main,
                },
            },
        },
        button: {
            backgroundColor: theme.palette.primary.dark,
            '& > *': {
                //marginTop: theme.spacing(1),
                
            },
        },
        form: {
            backgroundColor: theme.palette.primary.dark,
            '& > *': {
                margin: theme.spacing(5),
                width: '50ch',
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
        email: Yup.string().email('Ugyldig epost!').required('Påkrevd'),
    });

    const onSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        console.log(values);
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
                    <Form className={classes.root}>
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
                                style={{ marginTop: theme.spacing(4) }}
                                >
                                <TextField
                                    name="email"
                                    label="SYSCO epost"
                                    placeholder="navn.navnesen@sysco.no"
                                    //margin="dense"
                                    color="secondary"
                                    variant="outlined"
                                    style={{ marginRight: theme.spacing(2) }}
                                />
                                <Button
                                    variant="outlined"
                                    color="secondary"
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