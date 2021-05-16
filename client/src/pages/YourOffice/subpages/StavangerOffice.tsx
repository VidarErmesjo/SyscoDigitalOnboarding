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

import StavangerOfficeProfile from './../../../assets/Polygons/StavangerOfficeProfile.svg';

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
        line: {
            width: 147,
            borderBottom: `6px solid ${theme.palette.secondary.main}`,
        },
        box: {
            width: 510,
            height: 477,
            backgroundColor: `rgba(42, 52, 63, 0.91)`,
            margin: theme.spacing(5)
        },
    })
);

const profileText = <React.Fragment>
    Navn: Marius Fornæss
    <br/>
    <br/>
    Tittel: Director Deliveries EnergyX

</React.Fragment>

const leftBox = <React.Fragment>
    <li><strong>Hva skiller Stavangerkontoret seg ut fra de andre kontorene?</strong></li>
    <br/>
    Vi er et ganske lite kontor, med 12 ansatte. Mange av våre ansatte har jobbet sammen i mange år (15+) i forskjellige selskaper, men startet sammen i SYSCO EnergyX sommeren 2019. Vi er nye i SYSCO, og sånn sett skiller vi oss ut fra resten av gjengen. 
</React.Fragment>

const rightBox = <React.Fragment>
    <li><strong>Hva med det sosiale?</strong></li>
    <br/>
    Vi pleier å ha et månedlig avdelingsmøte, med ca 30 min med informasjon, status, økonomi, salg etc. Etter dette har vi 1.5 time med et tema som en av de ansatte kan mye om. Presentasjon, diskusjon, knowledge sharing og litt mat og prat. I corona hjemmekontorfasen hadde vi en 15 min daglig digital kaffe drøs – de som ville ringte inn på teams for å skravle. Vi hadde også en månedlig digital lønnings pils.
    <br/><br/>
    <li><strong>Hvordan er kontoret organisert?</strong></li>
    <br/>
    Vi er kun en avdeling, har delt ansvaret mellom meg og Geir Olav Hagen. Jeg har HR/ansatte, Geir Olav økonomi og annen admin
</React.Fragment>

export default function StavangerOffice() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <Typography
            color="textPrimary"
            style={{
                fontSize: "35px",
                lineHeight: "40.25px",
                fontStyle: "normal",
                marginBottom: theme.spacing(1),
            }}
            >
            Stavanger-kontoret
        </Typography>
        <div className={classes.line}/>
    </div>

    const Content = () => <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
        >
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.box}
            >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                marginTop={theme.spacing(0.5)}
                >
                    <img
                        src={StavangerOfficeProfile}
                        alt="A smiling Director of Deliveries named Marius Fornæss."
                        style={{
                            marginRight: theme.spacing(4)
                        }}
                        />

                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: "17px",
                            lineHeight: "19.55px",
                        }}
                        >
                        {profileText}
                    </Typography>
            </Box>
            <div>
                <Typography
                    color="textPrimary"
                    style={{
                        fontSize: "20px",
                        lineHeight: "23px",
                        margin: theme.spacing(5),
                    }}
                    >
                    {leftBox}
                </Typography>
            </div>
        </Box>
        
        <div className={classes.box}>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "20px",
                    lineHeight: "23px",
                    margin: theme.spacing(5)
                }}
                >
                {rightBox}
            </Typography>
        </div>
    </Box>

    const Component = (): JSX.Element => {
        const scale = 820 / 671 * 0.75;
        return (
            <SyscoPage
                title={<Title/>}
                category={null}
                icon={null}
                content={<Content/>}
                color="secondary"
                style={{ width: 1268, height: 671, transform: `scale(${scale})` }}
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