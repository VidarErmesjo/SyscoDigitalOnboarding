import React from "react";

import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

import {
    SyscoPage,
    SyscoTextButtonBulleted
} from '../../../components/Custom';

import {
    WavingPersonIcon
} from '../../../components/Icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
        },
    }),
);

type Point = [number, number];

// Posisjoner hentet fra Figma.
const bullets = [
    {
        offset: [166, 139] as Point,
    },
    {
        offset: [182, 687] as Point,
    },
    {
        offset: [156, 1134] as Point,
    },
    {
        offset: [263, 435] as Point,
    },
    {
        offset: [264, 941] as Point,
    },
    {
        offset: [362, 222] as Point,
    },
    {
        offset: [350, 701] as Point,
    },
    {
        offset: [459, 565] as Point,
    },
    {
        offset: [447, 1009] as Point,
    },
    {
        offset: [581, 254] as Point,
    },
    {
        offset: [555, 884] as Point,
    },
]

function Content() {
    return (
        <React.Fragment>
            {bullets.map((bullet, index) => (
                <SyscoTextButtonBulleted
                    key={index}
                    value="Hvor får jeg bestilt datautstyr?"
                    offset={bullet.offset}
                />
            ))}
        </React.Fragment>
    );
}

export default function Page7() {
    const classes = useStyles();
    const theme = useTheme();

    const Component = (): JSX.Element =>  {
        return (
            <SyscoPage
                color="secondary"
                title="Ofte stiltes spørsmål til fadder"
                category="Fadder"
                icon={<WavingPersonIcon/>}
                content={<Content/>}            
            />
        );
    }

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props => <div className={classes.root} style={props}><Component/></div>}
            </Spring>
        </React.Fragment>
    );
}