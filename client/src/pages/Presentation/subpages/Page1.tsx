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

import { HexagonIcon } from '../../../components/icons';

import { SyscoPage, SyscoLogo } from '../../../components/Custom';

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

export default function Page1() {
    const classes = useStyles();

    const Content = () => {
        /* const IconArray = [
            {
                minWdith: "240px",
                minHeight: "220px",
                positionTop: "8vw",
                positionLeft: "7vw",
                imageURL: "https://i.imgur.com/Yfh3aXT.png"
            },
            {
                minWidth: "130px",
                minHeight: "120px",
                positionTop: "6vw",
                positionLeft: "16vw",
                imageURL: "https://i.imgur.com/2RZuwfa.png"
            },
            {
                minWidth: "180px",
                minHeight: "180px", 
                positionBottom: "11vw",
                positionLeft: "21vw",
                imageURL: "https://i.imgur.com/HHsQUcZ.png"
            }
        ] */
        return (
            <div className={classes.content}>
                <div className={classes.divider}>
                    <div className={classes.leftSide}>
                        
                        <HexagonIcon 
                            minWidth="240px" 
                            minHeight="220px" 
                            positionTop="8vw" 
                            positionLeft="7vw"
                            imageURL="https://i.imgur.com/Yfh3aXT.png"
                            key={1}
                        />
                        <HexagonIcon 
                            minWidth="130px" 
                            minHeight="120px" 
                            positionTop="6vw"
                            positionLeft="16vw"
                            imageURL="https://i.imgur.com/2RZuwfa.png"
                            key={2}
                        />
                        <HexagonIcon 
                            minWidth="180px" 
                            minHeight="180px" 
                            positionBottom="11vw"
                            positionLeft="21vw"
                            imageURL="https://i.imgur.com/HHsQUcZ.png"
                            key={3}
                        />
                    </div>
                    <div className={classes.rightSide} style={{marginTop: '2vw'}}>
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
                                <svg height="370" width="370" style={{marginRight: '35px', position: 'absolute', marginLeft: '4vw', marginTop: '6vw'}}>
                                    <circle cx="350" cy="350" r="300"  stroke-width="5" fill="none" />
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
                                <div className={classes.flexRow + ' ' + classes.whiteColor} style={{marginTop: '-1vw'}}>
                                    <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                    <p style={{fontSize: 28}}>
                                        Demografi
                                    </p>
                                </div>
                                <div className={classes.flexRow + ' ' + classes.whiteColor} style={{marginTop: '-2vw'}}>
                                    <PinDropIcon style={{color: '#FFFFFF'}} fontSize="large" />
                                    <p style={{fontSize: 22, marginLeft: '15px', }}>
                                        Hovedkontor i Haugesund
                                    </p>
                                </div>
                                <div className={classes.flexRow + ' ' + classes.whiteColor} style={{marginTop: '-2vw'}}>
                                    <CakeIcon style={{color: '#FFFFFF'}} fontSize="large" />
                                    <p style={{fontSize: 22, marginLeft: '15px'}}>
                                    Etablert 2. juli 2004
                                    </p>
                                </div>
                                <div className={classes.flexRow + ' ' + classes.whiteColor} style={{marginTop: '-2vw'}}>
                                    <LocationCityIcon style={{color: '#FFFFFF'}} fontSize="large" />
                                    <p style={{fontSize: 20, marginLeft: '15px'}}>
                                    Eies av det norske investerings-selskapet <br />
                                    Credo Partners med Ferd som største investor
                                    </p>
                                </div>
                            </div>
                            {/* ---------------------------- RIGHT SIDE ------------------------- */}
                            <div>
                                <div className={classes.flexRow + ' ' + classes.whiteColor} style={{marginTop: '-1vw'}}>
                                    <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                    <p style={{fontSize: 28}}>
                                        Styret
                                    </p>
                                </div>
                                <ul style={{fontSize: 22, marginLeft: '15px', marginTop: '-1vw' }} className={classes.whiteColor}>
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