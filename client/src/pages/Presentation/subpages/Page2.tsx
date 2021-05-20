import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import HexagonImage, { IHexagonImage } from '../../../components/Custom/HexagonImage';


import {
    SyscoPage
} from '../../../components/Custom';

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
        divider: {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: '1fr',
            gap: '0px 0px',
            gridTemplateAreas:". .",
        },
        leftSide: {
            width: '40vw',
            backgroundColor: '#121921',
        },
        rightSide: {
            width: '40vw',
            backgroundColor: '#2a343f',
            border: '1px solid black',
        },
        border: {
            borderColor: '1px solid black'
        },
        whiteColor: {
            color: "#FFFFFF"
        },
        flexRow: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '15px;'
        },
        innerDivider: {
            display: 'grid',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: '1fr',
            gap: '0px 0px',
            gridTemplateAreas:". .",
        },
        innerDividerTwo: {
            display: 'flex',
            flexDirection: 'row'
        }
    })
);

const hexagons: IHexagonImage[] = [
    {
        minWidth: "192px", 
        minHeight: "193px", 
        positionLeft: "302px",
        positionTop: "179px", 
        imageURL: "https://i.imgur.com/Yfh3aXT.png"
    },
    {
        minWidth: "152px",
        minHeight: "152px", 
        positionLeft: "233px",
        positionTop: "344px",
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: "258px", 
        minHeight: "300px",
        positionLeft: "406px",
        positionTop: "313px",
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    }
]

interface IFacts {
    title: string;
    value: string;
}

const facts: IFacts[] = [
    {
        title: "Kunder",
        value: "500"
    },
    {
        title: "Omsetning",
        value: "385"
    },
    {
        title: "Land",
        value: "3"
    },
    {
        title: "Eierskap",
        value: "Privat"
    },
    {
        title: "Energikunder",
        value: "100"
    },
    {
        title: "Ansatte",
        value: "235"
    }
]

export default function Page2() {
    const classes = useStyles();
    const theme = useTheme();

    const Content = () => {    
        return (
            <div className={classes.content}>
                <div className={classes.divider}>
                    <div className={classes.leftSide}>
                        {hexagons.map((hexagon, index) => (
                            <HexagonImage 
                                minWidth={hexagon.minWidth} 
                                minHeight={hexagon.minHeight} 
                                positionLeft={hexagon.positionLeft}
                                positionTop={hexagon.positionTop} 
                                imageURL={hexagon.imageURL}
                                key={index}
                            />
                        ))}                     
                    </div>
                    <div className={classes.rightSide + ' ' + classes.whiteColor} style={{ marginTop: '5vw' }}>
                        <div style={{ marginLeft: '5vw', fontSize: '28px' }}>
                            <ul style={{ listStyleType: 'none', marginTop: '5vw', fontSize: 32 }}>
                                {facts.map((fact, index) => (
                                    <li key={index}>
                                        <ArrowRightIcon
                                            style={{ color: theme.palette.secondary.main }}
                                            fontSize="large"
                                            /> 
                                        <strong>{fact.value}</strong> {fact.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }

    const Component = () => {
        return (
            <SyscoPage
                title={null}
                category={null}
                icon={null}
                content={<Content/>}
                color="secondary"
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