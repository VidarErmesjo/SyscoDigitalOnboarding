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

import StordOfficeBig from 'assets/polygons/StordOfficeBig.svg';
import StordOfficeMedium from 'assets/polygons/StordOfficeMedium.svg';
import StordOfficeSmall from 'assets/polygons/StordOfficeSmall.svg';

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
    })
);

const boxText = <React.Fragment>
    <strong>Kontoret</strong>
    <br/>
    På Stord-kontoret befinner det seg 19 ansatte fra SYSCO. Vi i Stord holder til i bygget som kalles SKL-bygget, det er eid av Sunnhordland Kraftlag.
    <br/>
    (Disse er også en relativt stor kunde av oss). 
    <br/><br/>
    <strong>Hvor?</strong>
    <br/>
    Kontoret er plassert i Leirvik som er kommunesentrum i Stord kommune. Leirvik er en liten by med kun 14 198 innbyggere.
    <br/><br/>
    <strong>Det sosiale</strong>
    <br/>
    2020 har jo vært et spesielt år med tanke på det sosiale i jobbsammenheng. Tidligere har vi blant annet hatt disse arrangementene: <em>Julebord, Sommerfest, Vinlotteri og Fjellturer</em>
</React.Fragment>

export default function StordOffice() {
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
            Stord-kontoret
        </Typography>
        <div className={classes.line}/>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            width="561px"
            height="479px"
            left="624px"
            top="124px"            
            style={{ backgroundColor: `rgba(42, 52, 63, 0.91)`}}
            >
            <Typography
                color="textPrimary"
                className={classes.content}
                style={{
                    fontSize: "20px",
                    lineHeight: "23px",
                    alignItems: 'flex-start',
                    margin: theme.spacing(3)
                }}
                >
                {boxText}
            </Typography>
        </Box>
        <Box
            position="absolute"
            left="105px"
            top="290px"
            >
            <img src={StordOfficeSmall} alt="Excited man wearing VR-helmet."/>
        </Box>
        <Box
            position="absolute"
            left="181px"
            top="108px"
            >
            <img src={StordOfficeMedium} alt="The Stord bridge."/>
        </Box>
        <Box
            position="absolute"
            left="296px"
            top="256px"
            >
            <img src={StordOfficeBig} alt="People enjoying their summer party by the coast."/>
        </Box>
        <Box
            position="absolute"
            left="470px"
            top="545px"
            width="130,08px"
            height="5,15px"
            >
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "center",
                    transform: `rotate(-30.0deg)`
                }}
                >
                Sommerfesten 2020
            </Typography>
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