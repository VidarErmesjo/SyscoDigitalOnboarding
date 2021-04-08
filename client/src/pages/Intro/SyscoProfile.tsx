import React from 'react';

import {
    createStyles,
    makeStyles,
    useTheme,
    Theme
} from '@material-ui/core';

import {
    animated,
    useSpring
} from 'react-spring';

import polygon4 from './../../assets/SyscoProfile/Polygon 4.svg';
import polygon5 from './../../assets/SyscoProfile/Polygon 5.svg';
import polygon6 from './../../assets/SyscoProfile/Polygon 6.svg';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        polygon4: {
            position: 'absolute',
            width: '152px',
            height: '152px',
            left: '417px',
            top: '439px',
        },
        polygon5: {
            position: 'absolute',
            width: '192px',
            height: '193px',
            left: '494px',
            top: '283px',
        },
        polygon6: {
            position: 'absolute',
            width: '258px',
            height: '300px',
            left: '223px',
            top: '193px',
        },
    })
);

export default function SyscoProfile() {
    const classes = useStyles();

    const theme = useTheme();

    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: theme.transitions.duration.enteringScreen }
    });

    return (
        <React.Fragment>
            <animated.div style={style}>
                <img src={`${polygon4}`} className={classes.polygon4}/>
                <img src={`${polygon5}`} className={classes.polygon5}/>
                <img src={`${polygon6}`} className={classes.polygon6}/>
            </animated.div>
        </React.Fragment>
    );
}