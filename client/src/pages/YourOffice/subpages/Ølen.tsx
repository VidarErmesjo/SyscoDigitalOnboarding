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

import ØlenKontoret from 'assets/images/ØlenKontoret.png';
import ØlenSosialt from 'assets/images/ØlenSosialt.png';
import ØlenCovid19 from 'assets/images/ØlenCovid19.png';


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

const textKontoret = <React.Fragment>
    <strong>Livet på kontoret</strong>
    <br/><br/>

    Tiden for permer og papir er for en stor del over i vår bransje, så tiden med veksling mellom hjemmekontor og bortekontor har gått veldig greit, med lite belastning for kundene.
</React.Fragment>

const textSosialt = <React.Fragment>
    <strong>Sosiale happenings</strong>
    <br/><br/>
    Sosiale happenings skjer i blant med kontorene Stord og i Haugesund, eller samler gjengen til en hyttetur eller julebord her lokalt. En dag med julegrøt hører til i desember, finner fram vaffeljernet innimellom og ellers er vi åpne for forslag som kommer fra våre kolleger rundtomkring. 
</React.Fragment>

const textCovid19 = <React.Fragment>
    <strong>Covid-19</strong>
    <br/><br/>
    Av sosiale happenings har det selvsagt ikke vært så mye det siste året, men i mer normale tider er vi med på flere sosiale samlinger. 
</React.Fragment>

export default function Ølen() {
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
            ØLEN
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
            <img src={ØlenKontoret} alt="Pencil, printet spreadsheet and calculator."/>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "17px",
                    lineHeight: "19.55px",
                    marginTop: theme.typography.pxToRem(24),
                }}>
                {textKontoret}
            </Typography> 
        </span>
        <span className={classes.item}>
            <img src={ØlenSosialt} alt="Two guys being sosial at work in their cubicle environment."/> 
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "17px",
                    lineHeight: "19.55px",
                    marginTop: theme.typography.pxToRem(24),
                }}>
                {textSosialt}
            </Typography>    
        </span>
        <span className={classes.item}>
            <img src={ØlenCovid19} alt="Artist rendition of virus particles."/>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "17px",
                    lineHeight: "19.55px",
                    marginTop: theme.typography.pxToRem(24),
                }}>
                {textCovid19}
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