import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';


// Icons
import PinDropIcon from '@material-ui/icons/PinDrop';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CakeIcon from '@material-ui/icons/Cake';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import HexagonImage, { IHexagonImage } from 'components/Custom/HexagonImage';

import { SyscoPage, SyscoLogo } from 'components/Custom';

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
        minWidth: "258px", 
        minHeight: "300px", 
        positionLeft: "214px",
        positionTop: "206px", 
        imageURL: "https://i.imgur.com/Yfh3aXT.png"
    },
    {
        minWidth: "192px",
        minHeight: "193px", 
        positionLeft: "494px",
        positionTop: "293px",
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: "152px", 
        minHeight: "152px",
        positionLeft: "417px",
        positionTop: "448px",
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    }
]

export default function Page1() {
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
                    <div className={classes.rightSide} style={{ marginTop: '2vw'}} >
                        <div className={classes.innerDividerTwo}>
                            <div>
                                {/* Logo */}
                                <div className={classes.flexRow}>
                                    <SyscoLogo 
                                        className={classes.whiteColor} 
                                        style={{ fontSize: 318, marginTop: '-4vw' }}
                                    />                                    
                                </div>
                                <div className={classes.whiteColor} >
                                    <p style={{ fontSize: 52, marginTop: '-4vw', marginLeft: '15px' }}>
                                        IT-Selskap
                                    </p>
                                    <ul>
                                        <li style={{ fontSize: 22 }}>
                                            Innenfor Energisektoren
                                        </li>
                                        <li style={{ fontSize: 22 }}>
                                            Konsulentselskap
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <svg
                                    height="370"
                                    width="370"
                                    style={{
                                        marginRight: '35px',
                                        position: 'absolute',
                                        //marginLeft: '2vw',
                                        marginTop: '6vw'
                                    }}>
                                    <circle cx="350" cy="350" r="300"  strokeWidth="5" fill="none" />
                                    <image 
                                        className='img-circle' 
                                        xlinkHref="https://i.imgur.com/hHY12O1.png" 
                                        x='75.5' 
                                        y="15" 
                                        height="180" 
                                        width="180"
                                    />
                                </svg>
                            </div>
                        </div>
                        
                        {/* ------------------------- Inner Divider Right Side --------------------------------------- */}
                        <div className={classes.innerDivider}>
                            {/* ---------------------------- LEFT SIDE ------------------------- */}
                            <div>
                                <div
                                    className={classes.flexRow + ' ' + classes.whiteColor}
                                    style={{ marginTop: '-1vw' }}
                                    >
                                    <ArrowRightIcon
                                        style={{ color: theme.palette.secondary.main }}
                                        fontSize="large"
                                    />
                                    <p style={{ fontSize: 28 }}>
                                        Demografi
                                    </p>
                                </div>
                                <div
                                    className={classes.flexRow + ' ' + classes.whiteColor}
                                    style={{ marginTop: '-2vw' }}
                                    >
                                    <PinDropIcon
                                        style={{ color: theme.palette.background.paper }}
                                        fontSize="large"
                                    />
                                    <p style={{ fontSize: 22, marginLeft: '15px' }}>
                                        Hovedkontor i Haugesund
                                    </p>
                                </div>
                                <div
                                    className={classes.flexRow + ' ' + classes.whiteColor}
                                    style={{ marginTop: '-2vw' }}
                                    >
                                    <CakeIcon
                                        style={{ color: theme.palette.background.paper }}
                                        fontSize="large"
                                        />
                                    <p style={{ fontSize: 22, marginLeft: '15px' }}>
                                    Etablert 2. juli 2004
                                    </p>
                                </div>
                                <div
                                    className={classes.flexRow + ' ' + classes.whiteColor}
                                    style={{ marginTop: '-2vw' }}
                                    >
                                    <LocationCityIcon
                                        style={{ color: theme.palette.background.paper }}
                                        fontSize="large"
                                    />
                                    <p style={{ fontSize: 20, marginLeft: '15px' }}>
                                    Eies av det norske investerings-selskapet <br />
                                    Credo Partners med Ferd som største investor
                                    </p>
                                </div>
                            </div>
                            {/* ---------------------------- RIGHT SIDE ------------------------- */}
                            <div>
                                <div
                                    className={classes.flexRow + ' ' + classes.whiteColor}
                                    style={{ marginTop: '-1vw' }}>
                                    <ArrowRightIcon
                                        style={{ color: theme.palette.secondary.main }}
                                        fontSize="large"
                                    />
                                    <p style={{ fontSize: 28 }}>
                                        Styret
                                    </p>
                                </div>
                                <ul
                                    style={{
                                        fontSize: 22,
                                        marginLeft: '15px',
                                        marginTop: '-1vw'
                                    }} 
                                    className={classes.whiteColor}
                                    >
                                    <li>
                                        Administrenrende direktør: Dagfinn Ringås
                                    </li>
                                    <li>
                                      Randi Navarro ny konserndirektør for Managed Services i SYSCO
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }    

    const Component = (): JSX.Element => {
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