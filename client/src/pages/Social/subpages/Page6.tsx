import React from 'react';

import {
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
} from 'components/Custom';

import { MoodIcon } from 'components/Icons';

import HexagonImage, { IHexagonImage } from 'components/Custom/HexagonImage';

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
        minWidth: 195,
        minHeight: 195,
        positionLeft: 865,
        positionTop: 67,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 247,
        minHeight: 247,
        positionLeft: 1056,
        positionTop: 34,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 332,
        minHeight: 385,
        positionLeft: 166,
        positionTop: 106,
        imageURL: "https://i.imgur.com/Yfh3aXT.png"
    },
    {
        minWidth: 247,
        minHeight: 247,
        positionLeft: 514,
        positionTop: 222,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 190,
        minHeight: 190,
        positionLeft: 770,
        positionTop: 256,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 176,
        minHeight: 176,
        positionLeft: 988,
        positionTop: 254,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 247,
        minHeight: 247,
        positionLeft: 1198,
        positionTop: 227,
        imageURL: "https://i.imgur.com/2RZuwfa.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 416,
        positionTop: 421,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 881,
        positionTop: 410,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
    {
        minWidth: 195,
        minHeight: 195,
        positionLeft: 1083,
        positionTop: 430,
        imageURL: "https://i.imgur.com/HHsQUcZ.png"
    },
]

export default function Page5() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <Typography
            color="textPrimary"
            style={{
                fontSize: "50px",
                fontStyle: "italic",
                lineHeight: "57.5px",
                marginRight: theme.spacing(24),
                marginTop: theme.spacing(-4)
            }}
            >
            *Mer bilder av faglig*
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
                category="Faglig innhold"
                icon={<MoodIcon/>}
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