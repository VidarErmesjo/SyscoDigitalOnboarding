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
            width: 516,
            height: 138,
            backgroundColor: `rgba(42, 52, 63, 0.91)`,
            margin: theme.typography.pxToRem(25),
        },
    })
);

interface IBoxContent {
    title: string;
    content: string;
}

const boxContent: IBoxContent[] = [
    {
        title: "Velkommen",
        content: "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
    },
    {
        title: "Fadder?",
        content: "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
    },
    {
        title: "Om SYSCO",
        content: "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
    },
    {
        title: "Brukerkontoer",
        content: "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
    },
    {
        title: "Prosjekter",
        content: "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
    },
    {
        title: "Personalhåndbok",
        content: "I tillegg har Oslo faste lønningspils på Oslo S, gaming- og spillkvelder på Lysaker kontoret, treningsgrupper for fotball og løping, lunsj-quiz, og middager."
    },
]

export default function Page1() {
    const classes = useStyles();
    const theme = useTheme();

    const Title = () => <div className={classes.content}>
        <Typography
            color ="textPrimary"
            style={{
                fontSize: "40px",
                fontStyle: "normal",
                lineHeight: "46px"
            }}
            >
            OPPSUMMERING
        </Typography>
    </div>

    const Content = () => <Box
        position="absolute"
        top="141px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        >
        {boxContent.map((item) => (
            <span className={classes.item}>
                <Typography
                    color="textPrimary"
                    style={{
                        position: "absolute",
                        fontSize: "20px",
                        lineHeight: "23px",
                        marginLeft: theme.typography.pxToRem(14),
                        marginTop: theme.typography.pxToRem(14)
                    }}
                    >
                    {item.title}
                </Typography>
                <ul style={{
                        color: theme.palette.secondary.main,
                        fontSize: 24,
                        listStyle: "square",
                        marginTop: theme.typography.pxToRem(40)
                    }}>
                    <li>
                        <Typography
                            color="textPrimary"
                            style={{
                                fontSize: "14px",
                                lineHeight: "16.1px"
                            }}
                            >
                            {item.content}
                        </Typography>
                    </li>
                </ul>
            </span>
        ))}
    </Box>

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