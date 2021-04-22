import React from "react";

import {
    Box,
    ButtonBase,
    createStyles,
    Icon,
    IconButton,
    makeStyles,
    PropTypes,
    Theme,
    Typography,
    useTheme,
    withStyles,
} from '@material-ui/core';

import {
    MoodIcon,
    OutdoorGrillIcon,
    SportsHandballIcon,
    SportsVolleyballIcon,
} from '../../components/Icons';

const itemSpacing = 24;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            width: 1540,
            height: 820,
            backgroundColor: theme.palette.primary.main,

            transform: `scale(0.75)`,
            userSelect: 'none',
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(8),
        },
        content: {
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

interface CardProps {
    title: string | null;
    icon: React.ReactNode | null;
    content: string | null;
    onClick: () => void;
}

function Card({title, icon, content, onClick}: CardProps): JSX.Element {
    const classes = useStyles();

    return (
        <span className={classes.item}>
            <IconButton
                color="secondary"
                onClick={onClick}
                disableRipple
                className={classes.iconButton}
                >
                {icon}
                {title}
            </IconButton>
            <Typography
                color="textPrimary"
                variant="body1"
                >
                {content}
            </Typography>

        </span>
    );
}

export default function Social() {
    const classes = useStyles();
    const theme = useTheme();

    const title = "Sosiale aktiviterer hos SYSCO";
    const afterWorkText = "Som nyansatt får du en SYSCO fadder som vil følge deg opp den første tiden. Hen vil være en coach og veileder de første ca. 3 ukene.";

    return (
        <React.Fragment>
            <section className={classes.root}>
                <div className={classes.title}>
                    <IconButton style={{ color: theme.palette.text.primary }} disabled>
                        <SportsVolleyballIcon/>
                        <Typography
                            color="inherit"
                            variant="h3"
                            className={classes.title}
                            >
                            {title}
                        </Typography>
                    </IconButton></div>
                <div className={classes.content}>
                    <Card
                        title="After work"
                        icon={<OutdoorGrillIcon/>}
                        content={afterWorkText}
                        onClick={() => alert("After work")}                     
                    />
                    <Card
                        title="Bedriftslag"
                        icon={<SportsHandballIcon/>}
                        content={afterWorkText}  
                        onClick={() => alert("Bedriftslag")}                      
                    />
                    <Card
                        title="Annen moro"
                        icon={<MoodIcon/>}
                        content={afterWorkText}
                        onClick={() => alert("Annen moro")}                     
                    />                   
                </div>
            </section>
        </React.Fragment>
    );
}