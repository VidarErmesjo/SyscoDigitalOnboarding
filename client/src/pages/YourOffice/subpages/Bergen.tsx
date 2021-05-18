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
} from '../../../components/Custom';

import BergenBig from './../../../assets/polygons/BergenBig.svg';
import BergenMedium from './../../../assets/polygons/BergenMedium.svg';
import BergenSmall from './../../../assets/polygons/BergenSmall.svg';


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
    })
);

const text = <React.Fragment>
    <em>
    “Av sosiale happenings arrangerer julebord og et par lunsjer i året hvor vi går på restaurant. Det er veldig hyggelig”
    </em>
</React.Fragment>

export default function Bergen() {
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
            BERGEN
        </Typography>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            left="355px"
            top="273px"
            >
            <img src={BergenBig} alt="Two people talking at the Bergen office."/>
        </Box>
        <Box
            position="absolute"
            left="256px"
            top="158px"
            >
            <img src={BergenMedium} alt="Bridge."/>
        </Box>
        <Box
            position="absolute"
            left="197px"
            top="299px"
            >
            <img src={BergenSmall} alt="VR-man."/>
        </Box>
        <Box
            position="absolute"
            left="668px"
            top="264px"
            width="431px"
            height="71px"
            borderLeft={`5px solid ${theme.palette.secondary.main}`}
            >
            <Typography
                color="textPrimary"
                style={{
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontFamily: theme.typography.fontFamily,
                    lineHeight: "23px",
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