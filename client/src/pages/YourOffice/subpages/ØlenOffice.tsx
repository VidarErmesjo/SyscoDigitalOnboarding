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

import ØlenOfficeBig from 'assets/polygons/ØlenOfficeBig.svg';
import ØlenOfficeMedium from 'assets/polygons/ØlenOfficeMedium.svg';
import ØlenOfficeSmall from 'assets/polygons/ØlenOfficeSmall.svg';

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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: "20px",
            lineHeight: "23px",
        },
    })
);

const boxText = <React.Fragment>
    <strong>Kontoret</strong>
    <br/><br></br>
    Vi er fire kvinner her på kontoret nå, elles har vi kontorplass til kollegaer fra Stord og Haugesund når det passer å jobbe litt sammen en dag. Vi kjenner ofte hverandres kunder, og hjelper og utfyller hverandre når det er behov for det.
    <br/><br/>
    Ølens-kontoret er en del av Sysco Finans, og er altså et regnskapskontor. Det var i Ølen El-portal ble til i sin tid, men vi som jobber i Ølen i dag har stort sett vanlige regnskapskunder, mange av dem fra nærområdet her. Alt fra snekkere og rørleggere til transportselskap og barnehager. Vi holder jo til på landet, og kjenner gjerne kundene våre både fra jobb og fritid.  
</React.Fragment>

export default function ØlenOffice() {
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
            Ølen-kontoret
        </Typography>
        <div className={classes.line}/>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            width="608px"
            height="527px"
            left="587px"
            top="108px"
            className={classes.content}
            style={{ backgroundColor: `rgba(42, 52, 63, 0.91)` }}
            >
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "23px",
                    lineHeight: "26.75px",
                    margin: theme.spacing(4)
                }}
                >
                {boxText}
            </Typography>
        </Box>
        <Box
            position="absolute"
            left="82px"
            top="299px"
            >
            <img src={ØlenOfficeSmall} alt="Sharp looking people in suits."/>            
        </Box>
        <Box
            position="absolute"
            left="158px"
            top="117px"
            >
            <img src={ØlenOfficeMedium} alt="Two people working at their office."/>            
        </Box>
        <Box
            position="absolute"
            left="273px"
            top="265px"
            >
            <img src={ØlenOfficeBig} alt="Oslo town hall."/>            
        </Box>
    </React.Fragment> 

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