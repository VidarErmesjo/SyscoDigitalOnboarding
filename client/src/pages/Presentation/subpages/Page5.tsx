import React from 'react';

import {
    Box,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import { Assignment as AssignmentIcon } from '@material-ui/icons';

import {
    SyscoPage,
} from 'components/Custom';

import WhatWeDo1 from 'assets/polygons/WhatWeDo1.svg';
import WhatWeDo2 from 'assets/polygons/WhatWeDo2.svg';
import WhatWeDo3 from 'assets/polygons/WhatWeDo3.svg';
import WhatWeDo4 from 'assets/polygons/WhatWeDo4.svg';
import WhatWeDo5 from 'assets/polygons/WhatWeDo5.svg';

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
            width: '100%'
        },
        flexRow: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '15px',
            justifyContent: 'flex-start'
        },
        item: {
            width: '100%',
        },
        whiteColor: {
            color: "#FFFFFF"
        },
    })
);
interface IImageItem {
    left: number
    top: number
    src: string
    alt: string
}

const imageItems: IImageItem[] = [
    {
        left: 163,
        top: 158,
        src: WhatWeDo1,
        alt: "Vannkraft."
    },
    {
        left: 354,
        top: 158,
        src: WhatWeDo2,
        alt: "Gass- og oljeenergi."
    },
    {
        left: 265,
        top: 331,
        src: WhatWeDo3,
        alt: "Solenergi."
    },
    {
        left: 458,
        top: 331,
        src: WhatWeDo4,
        alt: "Vindkraft."
    },
    {
        left: 365,
        top: 495,
        src: WhatWeDo5,
        alt: "Operation and monitoring."
    }
]

const boxItems: string[] = [
    "Vind-energi",
    "Operation and monitoring",
    "Olje- og gassenergi",
    "Vann-energi",
    "Sol-energi"
]

export default function Page5() {
    const classes = useStyles();
    const theme = useTheme();

    const Content = () => <div className={classes.content}>
        <div className={classes.flexRow} style={{ marginLeft: '40px', marginTop: '-20px' }}>
            <AssignmentIcon color="secondary" fontSize="large" />
            <Typography color="secondary" variant="h4">
                <h4 style={{ marginLeft: '10px' }}>
                    Hva vi gjør
                </h4> 
            </Typography>
        </div>
        {imageItems.map((item, index) => (
            <img
                src={item.src}
                alt={item.alt}
                key={index}
                style={{
                    position: "absolute",
                    left: item.left,
                    top: item.top
                }}
            />
        ))}
        <Box
            position="absolute"
            left="759px"
            top="158px"
            width="625px"
            height="514px"
            style={{
                backgroundColor: `rgba(42, 52, 63, 0.91)`
            }}
            >
            <ul style={{
                    fontSize: 40,
                    listStyle: "square",
                    color: theme.palette.secondary.main,
                    marginLeft: theme.spacing(12),
                    marginTop: theme.spacing(8)
                }}
                >
                {boxItems.map((item, index) => (
                    <li key={index}>
                        <Typography
                            color="textPrimary"
                            style={{
                                fontSize: 35,
                                lineHeight: "40.25px",
                                marginTop: theme.spacing(4)
                            }}
                            >
                            {item}
                        </Typography>
                    </li>
                ))}                    
            </ul>
        </Box>
    </div>      

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