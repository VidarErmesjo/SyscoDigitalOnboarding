import React, {} from 'react';
import clsx from 'clsx';

import {
    createStyles,
    Step,
    StepConnector,
    StepIconProps,
    StepLabel,
    Stepper,
    makeStyles,
    Theme,
    Typography,
    withStyles,
} from '@material-ui/core';

import {
    Settings as SettingsIcon,
    GroupAdd as GroupAddIcon,
    VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

const GradientConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 1,
    },
}))(StepConnector);
  
const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.dark,
            zIndex: 1,
            color: theme.palette.text.secondary,
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            boxShadow: '0 4px 20px 0 rgba(255,255,0,.50)',
        },
        completed: {
            backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
        },
    }),
);

function getSteps() {
    return ([
        'Intro',
        'Generisk presentasjon',
        'Tilpasset presentasjon',
        'Hva skjer når du er ansatt?',
        'Har du alt du trenger av kontoer?',
        'Noe motiverende for første dagen!',
        'Outro']
    );
};

function GradientStepIcon(props: StepIconProps) {
    const classes = useStyles();
    const { active, completed } = props;
  
    const icons: { [index: string]: React.ReactElement } = {
        1: <SettingsIcon/>,
        2: <GroupAddIcon/>,
        3: <VideoLabelIcon/>,
    };
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed,})}>
            {icons[String(props.icon)]}
        </div>
    );
}

export default function Progress() {
    const steps = getSteps();

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={3}
                connector={<GradientConnector/>}
                style={{ backgroundColor: 'transparent'}}
                >
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={GradientStepIcon}>
                        <Typography color="textPrimary" variant="caption">
                            {label}
                        </Typography>
                    </StepLabel>
                </Step>
                ))}
            </Stepper>
        </React.Fragment>
    );
};