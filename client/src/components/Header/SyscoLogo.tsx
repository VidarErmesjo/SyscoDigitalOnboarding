import React from "react";

import {
	Box,
	createStyles,
	makeStyles,
	useTheme,
	Theme,
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';
import logo from './../../assets/SYSCO_logo_white_RGB.png';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logo: {
			width: window.screen.availWidth * 0.1,
			height: (361 * window.screen.availWidth / 1745) * 0.1,
			maxHeight: 'fill-available',
			marginTop: theme.spacing(1.5),
			marginRight: theme.spacing(1.5),
		},
    })
);

export default function SyscoLogo(props: any) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.enteringScreen }}
                >
                {props =>
                    <Box
                    position="absolute"
                    top={0} 
                    right={0}
                    style={props}
                    >
                    <img
                        src={logo}
                        alt="SYSCO logo"
                        className={classes.logo}
                        style={{ userSelect: 'none' }}
                    />
                </Box>}
            </Spring>          
        </React.Fragment>
    );
}