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

import { useSpring, animated } from 'react-spring';

import {
    Formik,
    Form,
    FormikHelpers
} from 'formik';

import { Zustand } from '../../Zustand';
import * as Yup from 'yup';
import TextField from './TextFieldWrapper';
//import SyscoTextField from './../../components/Custom/SyscoTextField';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        button: {
            //backgroundColor: '#000',
        },
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
    const signIn = Zustand.useStore((state: any) => state.signIn);
    const classes = useStyles();
    const theme = useTheme();
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    const initialValues = {
        email: '',
    };
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Ugyldig epost!').required('Vennligs skriv inn gyldig SYSCO epost.'),
    });

    const onSubmit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        setSubmitting(false);
        signIn(values.email);
    };

    return (
        <React.Fragment>
            <animated.div
                style={style}
                >
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
                                    className={classes.button}
                                    >
                                    Start
                                </Button>              
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </animated.div>
        </React.Fragment>
    );  
}