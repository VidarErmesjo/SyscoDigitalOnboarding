import React from 'react';

import {
    Backdrop,
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
        backdrop: {
            zIndex: theme.zIndex.modal,
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

const text = "Det er flere sosiale tilbud her i SYSCO. Tilbudene varierer fra kontor til kontor, men i de neste slidesene får du et lite innblikk av hva du kan forvente some n SYSCO-ansatt."

export default function Page2() {
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
        <Backdrop open={true} className={classes.backdrop}>
            <Box
                display="flex"
                justifyContent="center"
                textAlign="left"
                alignItems="center"
                width="860px"
                height="311px"
                border={`1px solid #000`}
                boxSizing="border-box"
                boxShadow={`0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`}
                style={{ backgroundColor: theme.palette.secondary.main }}
                >
                <Typography
                    color="textSecondary"
                    style={{
                        fontSize: "30px",
                        lineHeight: "34.5px",
                        width: "661px"
                    }}
                    >
                    {text}
                </Typography>
            </Box>
        </Backdrop>
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