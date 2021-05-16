import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import { Zustand } from './../../store';

import { SyscoPage, SyscoLine } from '../../components/Custom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
        },
        item: {
            width: '100%',
        },
    })
);

function Content() {
    const [getCategories, getRoutes] = Zustand.useStore(state => [state.getCategories, state.getRoutes]);
    const classes = useStyles();
    const theme = useTheme();

    const categoryCount = getCategories().length;
    const pageCount = getRoutes().length;

    const Title = (): JSX.Element => <Typography color="secondary" variant="h1">Introduksjon</Typography>
    const Text = (): JSX.Element => {
        return (
            <React.Fragment>
                <Typography color="textPrimary" variant="h4">
                    Velkommen til SYSCO Digital Onboarding.
                    <br/><br/>
                </Typography>
                <Typography color="textPrimary" variant="h5">
                    Denne prosessen vil ta deg igjennom <strong style={{ color: theme.palette.info.main, fontSize: 32 }}>{categoryCount}</strong> deler, bestående av totalt <strong style={{ color: theme.palette.info.main, fontSize: 32 }}>{pageCount}</strong> sider, og den vil ta ca. <strong style={{ color: theme.palette.info.main, fontSize: 32 }}>Z</strong> minutter å gjennomføre.
                    <br/><br/>
                    Du kan navigere deg frem og tilbake i prosessen ved å benytte deg av <strong style={{ color: theme.palette.secondary.main}}>de grønne navigasjonspilene</strong> du finner på venstre og høyre side av denne teksten.
                    <br/><br/><br/>
                </Typography>
                <Typography
                    color="secondary"
                    variant="h4"
                    style={{ textAlign: 'center' }}
                    >
                    Lykke til :)
                </Typography>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.content}>
            <Box component={Title}/>
            <Box component={SyscoLine} className={classes.item}/>
            <Box marginTop={theme.spacing(1.5)} justifyContent="flex-start" className={classes.item}>
                <Text/>
            </Box>
        </div>
    );
}

export default function Intro(): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={null}
                category={null}
                icon={null}
                content={<Content/>}
                color="secondary"
            />           
        );
    }
    
    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div className={classes.root} style={props}>
                    <Component/>
                </div>}  
            </Spring>
        </React.Fragment>
    );
}