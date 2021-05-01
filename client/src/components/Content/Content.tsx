import React from 'react';

// MUI
import {
    Backdrop,
    CircularProgress,
    Container,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

// Route
import {
    BrowserRouter,
    Link,
    Redirect,
    Route,
    useHistory,
    useParams,
    useRouteMatch,
    Switch
} from 'react-router-dom';

// API
import shallow from 'zustand/shallow';
import { Zustand } from '../../store';
import { getRouteFromStep, getRoutes } from './../../api';
import config, { root } from '../../api/config';

import { Signup } from './../../pages';

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

function TheEnd() {
    return (
        <Typography color="secondary" variant="h1">Ferdig!</Typography>
    );
}

function Page(props: any) {
    const { categoryId, subCategoryId }: any = useParams();
    const { path } = useRouteMatch();

    const Component = config.find(({ id }) => id === categoryId)
        ?.pages?.find(({ id }: any) => id === subCategoryId)
        ?.component;

    return (
        <React.Fragment>
            <Route
                path={`${path}`}
                component={Component ?? TheEnd}
                {...props}
                />
        </React.Fragment>
    );
}

function Category() {
    const { path } = useRouteMatch();

    return (
        <React.Fragment>
            <Route path={`${path}/:subCategoryId`} component={Page}/>
        </React.Fragment>
    );
}

function Categories() {
    const { path } = useRouteMatch();

    return (
        <React.Fragment>
            <Route path={`${path}/:categoryId`} component={Category}/>
        </React.Fragment>
    );
}

export default function Content() {
    const [isLoading, user, currentStep] = Zustand.useStore(state => [
        state.isLoading,
        state.user,
        state.currentStep
    ]);

    const classes = useStyles();
    const theme = useTheme();

    // Omdiriger browser til innlogging ved avsluttet Onboarding.
    const history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
        }
    }, [user, history]);

    const currentRoute = getRouteFromStep(currentStep);

    return (
        <React.Fragment>
            <Container fixed className={classes.root}>
                {!isLoading ? <React.Fragment> 
                    <Route exact path="/">
                        {!user && <Signup/>}
                    </Route>
                    <Route path={root} component={Categories}/>
                    <Redirect to={currentRoute}/>
                </React.Fragment>
                : <CircularProgress size={theme.spacing(10)} className={classes.circularProgress}/>}
            </Container>
        </React.Fragment>
    );
}