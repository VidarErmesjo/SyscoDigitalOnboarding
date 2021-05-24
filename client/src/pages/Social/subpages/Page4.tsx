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

import { OutdoorGrillIcon } from '../../../components/Icons';

import VRManMini from './../../../assets/polygons/VRManMini.svg';
import VRManSmall from './../../../assets/polygons/VRManSmall.svg';
import Lisa176 from './../../../assets/polygons/Lisa176.svg';
import Lisa190 from './../../../assets/polygons/Lisa190.svg';
import Lisa247 from './../../../assets/polygons/Lisa247.svg';
import WomenLaughingBig from './../../../assets/polygons/WomenLaughingBig.svg';

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

interface ICoordinates {
    left: number;
    top: number;
    src: string;
    alt: string;
}

const imageCoordinates: ICoordinates[]  = [
    {
        left: 541,
        top: 170,
        src: VRManMini,
        alt: "Person wearing VR headset."
    },
    {
        left: 675,
        top: 88,
        src: VRManSmall,
        alt: "Person wearing VR headset."
    },
    {
        left: 866,
        top: 55,
        src: Lisa247,
        alt: "Smiling woman at her work station."
    },
    {
        left: 214,
        top: 186,
        src: WomenLaughingBig,
        alt: "Women at work laughing."
    },
    {
        left: 580,
        top: 277,
        src: Lisa190,
        alt: "Smiling woman at her work station."
    },
    {
        left: 798,
        top: 275,
        src: Lisa176,
        alt: "Smiling woman at her work station."
    },
    {
        left: 1008,
        top: 248,
        src: Lisa247,
        alt: "Smiling woman at her work station."
    },
    {
        left: 474,
        top: 461,
        src: VRManSmall,
        alt: "Person wearing VR headset."
    },
    {
        left: 691,
        top: 431,
        src: VRManSmall,
        alt: "Person wearing VR headset."
    },
    {
        left: 893,
        top: 451,
        src: VRManSmall,
        alt: "Person wearing VR headset."
    },
]

export default function Page4() {
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
            *Bilder av After Work*
        </Typography>
    </div>

    const Content = () => <React.Fragment>
        {imageCoordinates.map((image) => <Box
            position="absolute"
            left={image.left}
            top={image.top}
            >
            <img src={image.src} alt={image.alt}/>
        </Box>)}
    </React.Fragment>

    const Component = () => {
        return (
            <SyscoPage
                title={<Title/>}
                category="After work"
                icon={<OutdoorGrillIcon/>}
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