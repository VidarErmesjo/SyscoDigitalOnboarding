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

import BergenOfficeBig from 'assets/polygons/BergenOfficeBig.svg';
import BergenOfficeMedium from 'assets/polygons/BergenOfficeMedium.svg';
import BergenOfficeSmall from 'assets/polygons/BergenOfficeSmall.svg';

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
    "Bergenskontoret består av 7 ansatte. Kontoret skiller seg derfor ut med at det er betraktelig mindre enn de fleste andre kontorene.",
    "Det er to avdelinger representert. Vi styrer alt selv med flat struktur."
]

export default function BergenOffice() {
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
            Bergen-kontoret
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
                    marginLeft: theme.spacing(3)
                }}
                >
                {boxText.map((text, index) =>
                <li key={index}>
                    <Typography
                        color="textPrimary"
                        style={{
                            fontSize: "23px",
                            lineHeight: "26.45px",
                            margin: theme.spacing(4)
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
            <img src={BergenOfficeSmall} alt="Sharp looking people in suits."/>            
        </Box>
        <Box
            position="absolute"
            left="173px"
            top="87px"
            >
            <img src={BergenOfficeMedium} alt="Two people working at their office."/>            
        </Box>
        <Box
            position="absolute"
            left="288px"
            top="235px"
            >
            <img src={BergenOfficeBig} alt="Old buildings at Bryggen."/>            
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