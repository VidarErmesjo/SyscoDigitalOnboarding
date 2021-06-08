import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
} from 'components/Custom';

import StordMaraton from 'assets/images/StordMaraton.png';
import StordSprotslig from 'assets/images/StordSportslig.png';
import StordOrganisering from 'assets/images/StordOrganisering.png';

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
            width: '33%',
            maxWidth: 284,
            margin: theme.spacing(4),
            textAlign: 'center',
        },
    })
);

const textMaraton = <React.Fragment>
    <strong>Sunhordaland maraton</strong>
    <br/><br/>
    Vi i Sysco Stord har hatt som tradisjon å løpe maratonet i Sunnhordaland sammen. Det startet med fellestreninger hver onsdag -noen ansatte var deltakere og andre var heiagjeng, det ble avsluttet med et restaurantbesøk på løpsdagen.
</React.Fragment>

const textSportslig = <React.Fragment>
    <strong>Sportslig</strong>
    <br/><br/>
    Nå i år startet vi med Padel, men hallen ble Coronastengt etter noen uker og vi har ikke kommet i gang etter det.
</React.Fragment>

const textOrganisering = <React.Fragment>
    <strong>Organisering</strong>
    <br/><br/>
    På Stord-kontoret er det ansatt totalt 19 personer og de er fordelt på 4 ulike avdelinger:
    <ul style={{ textAlign: "left", listStyle: "square", marginLeft: "47px" }}>
        <li>Sysco Finans</li>
        <li>Sysco EnergyX</li>
        <li>Sysco – Products</li>
        <li>Sysco Cloud & Operation</li>
    </ul>
</React.Fragment>

export default function Stord() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <Typography
            color ="secondary"
            style={{
                fontSize: "40px",
                fontStyle: "normal",
                lineHeight: "46px"
            }}
            >
            STORD
        </Typography>
    </div>

    const Content = () => <Box
        position="absolute"
        top="140px"
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        >
        <span className={classes.item}>
            <img src={StordMaraton} alt="Sunhordaland Maraton runners."/>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "17px",
                    lineHeight: "19.55px",
                    marginTop: theme.typography.pxToRem(24),
                }}>
                {textMaraton}
            </Typography> 
        </span>
        <span className={classes.item}>
            <img src={StordSprotslig} alt="Tennis racket, three balls, blue field and net."/> 
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "17px",
                    lineHeight: "19.55px",
                    marginTop: theme.typography.pxToRem(24),
                }}>
                {textSportslig}
            </Typography>    
        </span>
        <span className={classes.item}>
            <img src={StordOrganisering} alt="Smiling woman with laptop at Stord office."/>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "17px",
                    lineHeight: "19.55px",
                    marginTop: theme.typography.pxToRem(24),
                }}>
                {textOrganisering}
            </Typography>   
        </span>
    </Box>

    const Component = (): JSX.Element => {
        return (
            <SyscoPage
                title={<Title/>}
                category={null}
                icon={null}
                content={<Content/>}
                color="secondary"
                style={{ width: 1268, height: 671 }}
            />           
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