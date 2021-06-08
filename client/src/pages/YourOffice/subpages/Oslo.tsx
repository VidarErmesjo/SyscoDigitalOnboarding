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

import OsloBig from 'assets/polygons/StavangerBig.svg';
import OsloMedium from 'assets/polygons/StavangerMedium.svg';
import OsloSmall from 'assets/polygons/StavangerSmall.svg';


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
    })
);

const text = "Vi har en veldig liten sosialkomite og leter etter flere som er interessert i å hjelpe til eller finne på nye initiativer! Bli med!";

export default function Oslo() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <Typography
            color ="secondary"
            style={{
                fontSize: "34px",
                fontStyle: "normal",
                lineHeight: "39.1px"
            }}
            >
            Være med i sosialkomiteèn? 
        </Typography>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            left="355px"
            top="273px"
            >
            <img src={OsloBig} alt="Sharply dressed people wearing suits."/>
        </Box>
        <Box
            position="absolute"
            left="256px"
            top="158px"
            >
            <img src={OsloMedium} alt="Bridge."/>
        </Box>
        <Box
            position="absolute"
            left="197px"
            top="299px"
            >
            <img src={OsloSmall} alt="VR-man."/>
        </Box>
        <Box
            position="absolute"
            left="668px"
            top="264px"
            width="399px"
            height="auto"
            borderLeft={`5px solid ${theme.palette.secondary.main}`}
            >
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "18px",
                    fontFamily: theme.typography.fontFamily,
                    lineHeight: "20.7px",
                    marginLeft: "16.5px"
                }}
                >
                {text}
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