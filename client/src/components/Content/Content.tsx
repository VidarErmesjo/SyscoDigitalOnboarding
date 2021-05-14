import React from 'react';

import {
    CircularProgress,
    Container,
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import {
    Redirect,
    Route,
    useHistory,
} from 'react-router-dom';

import shallow from 'zustand/shallow';
import { Zustand } from '../../store';

import { Signup } from './../../pages';
import Components from './../../components';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
			zIndex: 0,
        },
        circularProgress: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            color: theme.palette.secondary.main,
            zIndex: theme.zIndex.mobileStepper,
        },
    })
);

export default function Content() {
    const [isLoading, user, currentStep, getCurrentRoute, getRoutes, data] = Zustand.useStore(state => [
        state.isLoading,
        state.user,
        state.currentStep,
        state.getCurrentRoute,
        state.getRoutes,
        state.data
    ], shallow);

    const classes = useStyles();
    const theme = useTheme();

    // Omdiriger browser til innlogging ved avsluttet Onboarding.
    const history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
        }
    }, [user, history]);

    // Henter inn alle baner.
    const routes = React.useMemo(() => 
        getRoutes().map(({ path, component }, key) => {
            return <Route
                exact
                path={path}
                component={Components[component]}
                key={key}
            />}
    ), [user]);

    const currentRoute = React.useMemo(() => getCurrentRoute().path!, [currentStep]);

    return (
        <React.Fragment>
            <Container fixed className={classes.root}>
                {!isLoading ? <React.Fragment> 
                    <Route exact path="/">
                        {!user && <Signup/>}
                    </Route>
                    {routes}
                    {user && <Redirect exact to={currentRoute}/>}
                </React.Fragment>
                : <CircularProgress size={theme.spacing(10)} className={classes.circularProgress}/>}
            </Container>
        </React.Fragment>
    );
}