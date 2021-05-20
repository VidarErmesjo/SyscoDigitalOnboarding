import React from 'react';

import {
    Box,
    ButtonBase,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Typography,
    useTheme
} from '@material-ui/core';

import {
    SyscoPage,
} from '../../../components/Custom';

import { AccountIcon, ShieldIcon } from '../../../components/icons';

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
            //width: '100%',
        },
    })
);

interface IPlatformList {
    title: string
    left: number
    top: number
    width: number
}

const platformList: IPlatformList[] = [
    {
        title: "Wiki",
        left: 484,
        top: 393,
        width: 62  
    },
    {
        title: "Sharepoint",
        left: 553,
        top: 393,
        width: 109  
    },
    {
        title: "Microsoft Teams",
        left: 671,
        top: 393,
        width: 165  
    },
    {
        title: "Microsoft Outlook",
        left: 845,
        top: 393,
        width: 192  
    },
    {
        title: "Microsoft OneDrive",
        left: 483,
        top: 435,
        width: 186  
    },
    {
        title: "Slack",
        left: 675,
        top: 435,
        width: 98  
    },
    {
        title: "CV Partner",
        left: 780,
        top: 435,
        width: 118  
    },
    {
        title: "Udemy",
        left: 905,
        top: 435,
        width: 138  
    }
]


export default function Page5() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <IconButton disabled style={{ color: theme.palette.background.paper, marginTop: 200 }}>
            <ShieldIcon style={{ fontSize: 52 }}/>
            <Typography
                color="secondary"
                style={{
                    fontSize: 40,
                    lineHeight: "46px"
                }}
                >
                SYSCO plattformer
            </Typography>
        </IconButton>
    </div>

    const Content = () => <React.Fragment>
        <div>
            <Typography
                color="textPrimary"
                style={{
                    fontSize: 18,
                    lineHeight: "20.7px",
                }}
                >
                Trykk på navnet for informasjon om de resterende plattformene
            </Typography>
        </div>
        <Box
            position="absolute"
            top="393px"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            width="600px"
            >
            {platformList.map((platform, index) => (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width={platform.width}
                        height="32px"
                        margin="auto"
                        marginTop={theme.typography.pxToRem(8)}
                        borderRadius="5px"
                        component="span"
                        style={{
                            backgroundColor: "#C4C4C4"
                        }}
                        key={index}
                        >
                        <ButtonBase
                            onClick={() => alert("You clicked me!")}
                            >
                            <Typography
                                color="primary"
                                style={{
                                    fontSize: 20,
                                    lineHeight: "23.44px"
                                }}
                                >
                                {platform.title}
                            </Typography>
                        </ButtonBase>
                    </Box>
            ))}
        </Box>
    </React.Fragment>

    const Component = () => {
        return (
            <SyscoPage
                title={<Title/>}
                category="Brukerkontoer"
                icon={<AccountIcon/>}
                content={<Content/>}
                color="primary"
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