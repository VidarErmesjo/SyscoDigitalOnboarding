import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core';

import {
    SyscoPage,
} from '../../../components/Custom';

import { HexagonImage } from '../../../components/Custom';
import { IHexagonImage } from '../../../components/Custom/HexagonImage';

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

const images: IHexagonImage[]  = [
    {
        minWidth: 107,
        minHeight: 107,
        positionLeft: 541,
        positionTop: 170,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 675,
        positionTop: 88,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 247,
        minHeight: 247,
        positionLeft: 866,
        positionTop: 55,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 332,
        minHeight: 362,
        positionLeft: 214,
        positionTop: 186,
        imageURL: "https://i.imgur.com/Yfh3aXT.png"
    },
    {
        minWidth: 190,
        minHeight: 190,
        positionLeft: 580,
        positionTop: 277,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 176,
        minHeight: 176,
        positionLeft: 798,
        positionTop: 275,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 247,
        minHeight: 247,
        positionLeft: 1008,
        positionTop: 248,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 474,
        positionTop: 461,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 691,
        positionTop: 431,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 893,
        positionTop: 451,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
]

export default function Page1() {
    const classes = useStyles();

    const Title = () => <div className={classes.content}>
        <Typography
            color ="secondary"
            style={{
                fontSize: "40px",
                fontStyle: "normal",
                lineHeight: "46px"
            }}
            >
        
        </Typography>
    </div>

    const Content = () => <React.Fragment>
        {images.map((image, index) => <HexagonImage
            minWidth={image.minWidth}
            minHeight={image.minHeight}
            positionLeft={image.positionLeft}
            positionTop={image.positionTop}
            imageURL={image.imageURL}
            key={index}
            />
        )}
    </React.Fragment>

    const Component = () => {
        return (
            <SyscoPage
                title={<Title/>}
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