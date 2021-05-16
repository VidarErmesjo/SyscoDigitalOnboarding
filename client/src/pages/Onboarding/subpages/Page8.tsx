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

import {
    SyscoPage,
} from '../../../components/Custom';

import { WavingPersonIcon } from '../../../components/icons';

import FadderBig from '../../../assets/Polygons/FadderBig.svg';
import FadderMedium from '../../../assets/Polygons/FadderMedium.svg';
import FadderSmall from '../../../assets/Polygons/FadderSmall.svg';

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
        },
        item: {
            width: '100%',
        },
        sponsorCard: {
            position: 'absolute',
            width: 521,
            height: 361,
            left: 823,
            top: 149,

            backgroundColor: `rgba(42, 52, 63, 0.91)`,
        },
    })
);

function SponsorCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <span className={classes.sponsorCard}>
            <Box
                position="absolute"
                margin="67px 264px 254px 85px"
                >
                <Typography
                    color="textPrimary"
                    style={{ fontSize: 34, lineHeight: '40.25px' }}
                    >
                    Din fadder:
                </Typography>
            </Box>
            <Box
                position="absolute"
                width="180px"
                height="46px"
                margin='64px 126px 251px 263px'
                borderRadius="5%"
                onClick={() => alert("Din fadder: Navn Navnesen")}
                style={{ backgroundColor: '#C4C4C4'}}
                >
                <Typography
                    color="textSecondary"
                    variant="h6"
                    noWrap
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%)`,
                        fontWeight: theme.typography.fontWeightBold
                    }}
                    >
                    Navn Navnesen
                </Typography>
            </Box>
            <Box
                position="absolute"
                width="396px"
                height="140px"
                margin="165px 53px 56px 72px"
                >
                <Typography color="textPrimary" style={{ fontSize: 17, lineHeight: '19.55px' }}>
                    Din fadder skal veilede, være til stede og integrere deg på en god måte hos oss.
                    <br/><br/>
                    Sysco har et ansvar for å bidra til at nye kollegarer finner seg raskt og godt til rette både i jobben og i selskapet og får en god og positiv opplevelse. Din fadder tar denne rollen seriøst. 
                </Typography>
            </Box>
        </span>
    );

}

function Images() {
    return (
        <span>
            <Box
                position="absolute"
                left="145px"
                top="142px"
                >
                <img src={FadderBig} alt="Large hexagonally shaped frame of person."/>
            </Box>
            <Box
                position="absolute"
                left="475px"
                top="176px"
                >
                <img src={FadderMedium} alt="Medium sized hexagonally shaped frame of person."/>
            </Box>
            <Box
                position="absolute"
                left="375px"
                top="410px"
                >
                <img src={FadderSmall} alt="Small hexagonally shaped frame of person."/>
            </Box>
        </span>
    );
}

function Content() {
    const classes = useStyles();


    return (
        <section className={classes.content}>
            <SponsorCard/>
            <Images/>            
        </section>
    );
}

export default function Page8() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <Typography
        color="textPrimary"
        variant="h4"
        style={{ fontStyle: 'normal'}}><WavingPersonIcon/>Fadder</Typography>

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={<Title/>}
                category="Fadder"
                icon={<WavingPersonIcon/>}
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