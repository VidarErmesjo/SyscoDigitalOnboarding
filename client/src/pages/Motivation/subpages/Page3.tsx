import React from "react";

import {
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme,
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoCard,
    SyscoPage
} from '../../../components/Custom';

import {
    MoodIcon,
    OutdoorGrillIcon,
    SportsHandballIcon,
    SportsVolleyballIcon,
} from '../../../components/Icons';

const itemSpacing = 24;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
        },
        config: {
            position: 'relative',
            width: 1540,
            height: 820,
            backgroundColor: theme.palette.primary.main,

            //transform: `scale(0.75)`,
            userSelect: 'none',
        },
        container: {
            display: 'flex',
            flex: '0 0 row',
            gap: theme.spacing(itemSpacing),
            justifyContent: 'center',
            alignContent: 'space-evenly',
            textAlign: 'center',
            marginLeft: theme.spacing(itemSpacing),
            marginRight: theme.spacing(itemSpacing),           
        },
        item: {
            width: '33.33%',
        },
        iconButton: {
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
                background: 'none',
                transform: `scale(1.5)`,
            },
        },
    }),
);

function Content() {
    const classes = useStyles();
    const theme = useTheme();

    const title = "Sosiale aktiviterer hos SYSCO";
    const afterWorkText = "Som nyansatt får du en SYSCO fadder som vil følge deg opp den første tiden. Hen vil være en coach og veileder de første ca. 3 ukene.";

    return (
        <React.Fragment>
            <section className={classes.config}>
                <div className={classes.title}>
                    <IconButton style={{ color: theme.palette.text.primary }} disabled>
                        <SportsVolleyballIcon/>
                        <Typography color="inherit" variant="h3">
                            {title}
                        </Typography>
                    </IconButton></div>
                <div className={classes.container}>
                    <SyscoCard
                        title="After work"
                        icon={<OutdoorGrillIcon/>}
                        config={afterWorkText}
                        onClick={() => alert("After work")}                     
                    />
                    <SyscoCard
                        title="Bedriftslag"
                        icon={<SportsHandballIcon/>}
                        config={afterWorkText}  
                        onClick={() => alert("Bedriftslag")}                      
                    />
                    <SyscoCard
                        title="Annen moro"
                        icon={<MoodIcon/>}
                        config={afterWorkText}
                        onClick={() => alert("Annen moro")}                     
                    />                   
                </div>
            </section>
        </React.Fragment>
    );
}

export default function Page3(): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();

    const Component = (): JSX.Element => {
        return (
            <React.Fragment>
                <SyscoPage
                    title={null}
                    category="DEL 1"
                    icon={null}
                    content={<Content/>}
                    color="secondary"
                />    
            </React.Fragment>
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
};