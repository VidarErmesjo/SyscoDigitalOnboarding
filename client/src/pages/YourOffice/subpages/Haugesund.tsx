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

import HaugesundBig from './../../../assets/polygons/HaugesundOfficeBig.svg';
import HaugesundMedium from './../../../assets/polygons/HaugesundOfficeMedium.svg';
import HaugesundSmall from './../../../assets/polygons/HaugesundOfficeSmall.svg';


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
        box: {
            position: "absolute",
            top: 191,
            left: 736,
            width: 458,
            height: 385,
            backgroundColor: `rgba(42, 52, 63, 0.91)`,
            textAlign: "left",
        },
    })
);

const text: string[] = [
    "Her i SYSCO-Haugesund har vi ansatte fra flere avdelinger. Vi har ansatte fra Database & Infra, App Dev, Management, HR og Finance.",
    "Når det ikke er covid-19, har vi mye sosialt planlagt. Vi har «lønningstreff», vår og julesamlinger,  spillkvelder og felles treningsøkter både inne og ute."
]

export default function Haugesund() {
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
            HAUGESUND
        </Typography>
    </div>

    const Content = () => <React.Fragment>
        <Box
            position="absolute"
            left="349px"
            top="268px"
            >
            <img src={HaugesundBig} alt="Sharp looking people in suits."/>
        </Box>
        <Box
            position="absolute"
            left="234px"
            top="120px"
            >
            <img src={HaugesundMedium} alt="Two people working at their office."/>
        </Box>
        <Box
            position="absolute"
            left="158px"
            top="302px"
            >
            <img src={HaugesundSmall} alt="Haugesund marina."/>
        </Box>
        <div className={classes.box}>
            <ul
                style={{
                    color: theme.palette.secondary.main,
                    listStyle: `square`,
                    fontSize: "40px",
                    marginLeft: theme.typography.pxToRem(38),
                }}
                >
                {text.map((item, index) => (
                    <li key={index}>
                        <Typography
                            color="textPrimary"
                            style={{
                                fontSize: "20px",
                                lineHeight: "23px",
                                marginRight: theme.typography.pxToRem(50),
                                marginBottom: theme.typography.pxToRem(50)
                            }}
                            >
                            {item}
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
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