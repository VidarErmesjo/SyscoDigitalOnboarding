import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { HexagonIcon } from '../../../components/icons';

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

function Content() {
    const classes = useStyles();

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
                <div className={classes.rightSide + ' ' + classes.whiteColor} style={{marginTop: '5vw'}}>
                    <div style={{marginLeft: '5vw', fontSize: '28px'}}>
                        <ul style={{listStyleType: 'none', marginTop: '5vw', fontSize: 32}}>
                            <li>
                                <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" /> 
                                <strong>500</strong> Kunder
                            </li>
                            <li>
                                <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                <strong>385</strong> Omsetning
                            </li>
                            <li>
                                <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                <strong>3</strong> Land
                            </li>
                            <li>
                                <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                <strong>Privat</strong> Eierskap
                            </li>
                            <li>
                                <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                <strong>100</strong> Energikunder
                            </li>
                            <li>
                                <ArrowRightIcon style={{color: '#00FF97'}} fontSize="large" />
                                <strong>235</strong> Ansatte
                            </li>
                        </ul>
                    </div>
                    
                       
                </div>
            </div> 
        </div>
    );
}

export default function Page2() {
    const classes = useStyles();
    const theme = useTheme();

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