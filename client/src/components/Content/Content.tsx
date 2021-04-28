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
import { getActiveStep, useRoutes } from './../../api';
import { config } from '../../api/config';

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

function Done() {
    return <Typography color="secondary" variant="h3">Done!</Typography>
}

function Page(props: any) {
    const { categoryId, subCategoryId }: any = useParams();
    const { url } = useRouteMatch();

    const Component = config.find(({ id }) => id === categoryId)
        ?.pages.find(({ id }: any) => id === subCategoryId)
        ?.component;

    console.log(url);

    return (
        <React.Fragment>
            <Route
                path={`${url}`}
                component={Component}
                {...props}
                />
        </React.Fragment>
    );
}

function Category() {
    const { categoryId }: any = useParams();
    const { path, url } = useRouteMatch();
    const category = config.find(({ id }) => id === categoryId);

    return (
        <React.Fragment>
            <ul>
                {category?.pages?.map((subCategory: any) => (
                    <li key={subCategory.id}>
                        <Link to={`${url}/${subCategory.id}`}>
                            {subCategory.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Route path={`${path}/:subCategoryId`} component={Page}/>
        </React.Fragment>
    );
}

function Categories() {
    const { path, url } = useRouteMatch();

    return (
        <React.Fragment>
            <ul>
                {config.map(({ title, id }: any) => (
                    <li key={id}>
                        <Link to={`${url}/${id}`}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
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

    // Hvis user === null => omdiriger browser til root.
    const history = useHistory();
    React.useEffect(() => {
        if(!user) {
            history.replace("/");
        }
    }, [user, history]);

    //const routes = useRoutes();
    //console.log(routes);
    const root = "/sysco-digital-onboarding";

    return (
        <React.Fragment>
            <div>
                {user && <ul>
                    <li><Link to={root}>Sider</Link></li>
                </ul>}
            </div>
            <Container fixed className={classes.root}>
                {!isLoading ? <React.Fragment> 
                    {/* <Route exact path="/">
                        {!user && <Signup/>}
                    </Route> 
                    <Route path={root} component={Categories}/> */}
                    <Route path={root} component={!user ? Signup : Categories}/>
                </React.Fragment>
                : <CircularProgress size={theme.spacing(10)} className={classes.circularProgress}/>}
            </Container>
        </React.Fragment>
    );
}