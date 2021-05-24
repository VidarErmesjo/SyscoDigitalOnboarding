import React from "react";

import {
    Box,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme,
} from '@material-ui/core';

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
            width: '33%',
            maxWidth: 284,
            margin: theme.spacing(4),
            textAlign: 'center',
        },
        iconButton: {
            transition: theme.transitions.duration.standard + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
                background: 'none',
                transform: `scale(1.25)`,
            },
        },
    }),
);

const title = "Sosialt";
const afterWorkText = "Som nyansatt får du en SYSCO fadder som vil følge deg opp den første tiden. Hen vil være en coach og veileder de første ca. 3 ukene.";

export default function Page3() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.title}>
        <IconButton style={{ color: theme.palette.text.primary }} disabled>
            <SportsVolleyballIcon/>
            <Typography color="inherit" variant="h3">
                {title}
            </Typography>
        </IconButton>
    </div>

    const Content = () => <Box
        position="absolute"
        top="335px"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        >
        <span className={classes.item}>
            <SyscoCard
                title="After work"
                icon={<OutdoorGrillIcon/>}
                content={afterWorkText}
                onClick={() => alert("After work")}                     
            />
        </span>
        <span className={classes.item}>
            <SyscoCard
                title="Bedriftslag"
                icon={<SportsHandballIcon/>}
                content={afterWorkText}  
                onClick={() => alert("Bedriftslag")}                      
            />
        </span>
        <span className={classes.item}>
            <SyscoCard
                title="Annen moro"
                icon={<MoodIcon/>}
                content={afterWorkText}
                onClick={() => alert("Annen moro")}                     
            />                   
        </span>
    </Box>


    const Component = (): JSX.Element => {
        return (
            <React.Fragment>
                <SyscoPage
                    title={<Title/>}
                    category={null}
                    icon={null}
                    content={<Content/>}
                    color="secondary"
                />    
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Component/>
            </div>
        </React.Fragment>
    );
}