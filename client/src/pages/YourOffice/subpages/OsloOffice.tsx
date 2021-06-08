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

import OsloOfficeBig from 'assets/polygons/OsloOfficeBig.svg';
import OsloOfficeMedium from 'assets/polygons/OsloOfficeMedium.svg';
import OsloOfficeSmall from 'assets/polygons/OsloOfficeSmall.svg';


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

const boxText: string[] = [
    "Oslo-kontoret består av hele 135 ansatte. Kontoret skiller seg derfor ut med at det er betraktelig større enn de andre kontorene.",
    "Oslo har vanligvis fire større arrangement i året. To av disse gjøres på tvers av alle avdelingene og to gjøres per avdeling.",
    "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
]


export default function OsloOffice() {
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
            Oslo-kontoret
        </Typography>
        <div className={classes.line}/>
    </div>
    
    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            width="439px"
            height="364px"
            left="694px"
            top="155px"
            className={classes.content}
            style={{ backgroundColor: `rgba(42, 52, 63, 0.91)` }}
            >
            <ul style={{
                    color: theme.palette.secondary.main,
                    listStyle: `square`,
                    fontSize: "40px",
                    marginLeft: theme.spacing(2)
                }}
                >
                {boxText.map((text, index) =>
                <li key={index}>
                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: "18px",
                            lineHeight: "20.7px",
                            margin: theme.spacing(1)
                        }}
                        >
                        {text}
                    </Typography>
                </li>)}
            </ul>
        </Box>
        <Box
            position="absolute"
            left="97px"
            top="269px"
            >
            <img src={OsloOfficeSmall} alt="Sharp looking people in suits."/>            
        </Box>
        <Box
            position="absolute"
            left="173px"
            top="87px"
            >
            <img src={OsloOfficeMedium} alt="Two people working at their office."/>            
        </Box>
        <Box
            position="absolute"
            left="288px"
            top="235px"
            >
            <img src={OsloOfficeBig} alt="Oslo town hall."/>            
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