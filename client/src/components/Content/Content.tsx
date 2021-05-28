import React from 'react';

import {
    Container,
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';

import { animated, useTransition } from 'react-spring';

import shallow from 'zustand/shallow';
import { Zustand } from '../../store';

import { Signup } from './../../pages';
import Components from './../../components';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            /*position: 'absolute',
            top: '50%',
            left: '50%',*/
			zIndex: 0,
        },
    })
);

export default function Content() {
    const [user, scale, currentStep, stepDirection, getCurrentRoute, getRoutes] = Zustand.useStore(state => [
        state.user,
        state.scale,
        state.currentStep,
        state.stepDirection,
        state.getCurrentRoute,
        state.getRoutes,
    ], shallow);

    const classes = useStyles();
    const theme = useTheme();

    // Omdiriger browser til innlogging ved avsluttet Onboarding.
    const history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
            document.title = "Sysco Digital Onboarding";
        }
    }, [user, history]);

    // Henter inn alle ruter.
    const transitionRoutes = React.useMemo(() => 
        getRoutes()
            .filter((route) => route.component !== "video" && route.component !== "norway")
            .map(({ path, component }, key) => <Route
                exact
                path={path}
                component={Components[component]}
                key={key}
            />
    ), [user, getRoutes]);

    const fadeRoutes = React.useMemo(() =>
        getRoutes()
            .filter((route) => route.component === "video" || route.component === "norway")
            .map(({ path, component }, key) => <Route
                exact
                path={path}
                component={Components[component]}
                key={key}
            />
    ), [user, getRoutes]);

    const currentRoute = React.useMemo(() => getCurrentRoute().path, [currentStep, getCurrentRoute]);
    const from = React.useMemo(() => stepDirection === 0 ? "-200%" : "200%", [stepDirection]);
    const leave = React.useMemo(() => stepDirection === 1 ? "-200%" : "200%", [stepDirection]);

    const transitions = useTransition(useLocation(), location => location.pathname, {
        from: { opacity: 0, transform: `translateX(${from})` },
        enter: { opacity: 1, transform: `translateX(0%)` },
        leave: { opacity: 0, transform: `translateX(${leave})` }
    })

    const fades = useTransition(useLocation(), location => location.pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: theme.transitions.duration.enteringScreen }
    })

    return (
        <React.Fragment>
            <Container
                fixed
                className={classes.root}
                style={{
                    //transform: `translate(-50%, -50%) scale(${scale})`
                    transform: `scale(${scale})`
                }}
                >
                <React.Fragment> 
                    <Route exact path="/">
                        {!user && <Signup/>}
                    </Route>
                    {user && <Redirect
                        exact
                        to={currentRoute}
                    />}
                    {fadeRoutes}
                    {fades.map(({ item: location, props, key }) => <animated.div style={props} key={key}>
                            <Switch location={location}>
                                
                            </Switch>
                        </animated.div>                        
                    )}
                    {transitions.map(({ item: location, props, key }) => <animated.div style={props} key={key}>
                            <Switch location={location}>
                                {transitionRoutes}
                            </Switch>
                        </animated.div>
                    )}
                </React.Fragment>
            </Container>
        </React.Fragment>
    );
}