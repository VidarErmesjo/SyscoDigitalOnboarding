import React, { useContext } from 'react';
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
    Check as CheckIcon,
    RadioButtonUnchecked as RadioButtonUncheckedIcon,
    Settings as SettingsIcon,
    GroupAdd as GroupAddIcon,
    VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

import { UserContext } from '../../UserContext';

const GradientConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
            //backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
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
  
// const useStyles = makeStyles((theme: Theme) => 
//     createStyles({
//         root: {
//             backgroundColor: theme.palette.primary.dark,
//             zIndex: 1,
//             color: theme.palette.text.secondary,
//             width: 50,
//             height: 50,
//             display: 'flex',
//             borderRadius: '50%',
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         active: {
//             backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
//             //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
//             //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
//             //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
//             boxShadow: '0 4px 10px 0 rgba(0,255,0,.5)',
//         },
//         completed: {
//             backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
//             //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
//             //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
//             //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
//         },
//     }),
// );

const QontoConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: theme.palette.info.main,//'#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: theme.palette.info.main,//'#784af4',
        },
    },
    line: {
        borderColor: theme.palette.primary.light,//theme.palette.text.secondary,//'#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}))(StepConnector);

const useQontoStepIconStyles = makeStyles((theme: Theme) =>
        createStyles({
        root: {
            color: theme.palette.primary.light,//theme.palette.text.secondary,//'#eaeaf0',
            display: 'flex',
            height: 22,
            alignItems: 'center',
        },
        active: {
            color: theme.palette.info.main,//'#784af4',
        },
        circle: {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
        completed: {
            color: theme.palette.info.main,//'#784af4',
            zIndex: 1,
            fontSize: 18,
        },
    }),
);

const CustomConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 24,
        //left: '-25%',
        //width: '40%'
    },
    active: {
        '& $line': {
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            //backgroundColor: theme.palette.secondary.main,
            backgroundColor: theme.palette.text.primary,
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
            //backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            backgroundColor: theme.palette.text.primary, //theme.palette.secondary.main,
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
            //backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.text.primary, //theme.palette.primary.light,
        borderRadius: 1,
    },
}))(StepConnector);

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.light,
            zIndex: 1,
            color: theme.palette.text.secondary,
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            borderColor: theme.palette.secondary.main,
            border: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            boxShadow: '0 4px 10px 0 rgba(0,255,0,.25)',
            //boxShadow: '0 4px 10px 0 rgba(0,255,0,.5)',
        },
        completed: {
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FFFF57 0%, #FFF200 50%, #C7C000 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #FF823B 0%, #FF4E00 50%, #C30500 100%)',
            //backgroundImage: 'linear-gradient( 136deg, #79FFFF 0%, #27F7FF 50%, #00C4CC 100%)',
            backgroundColor: theme.palette.secondary.main,
            //backgroundImage: 'linear-gradient( 136deg, #6CFFC8 0%, #00FF97 50%, #00CA68 100%)',
            borderStyle: 'none',
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

function QontoStepIcon(props: StepIconProps) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active,})}>
            {completed ? <CheckIcon className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

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

function CustomStepIcon(props: StepIconProps) {
    const classes = useStyles();
    const { active, completed } = props;
  
    return (
        <div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed,})}>
            {props.completed === true ? <CheckIcon fontSize="large"/> : null }
        </div>
    );
}

export default function UserProgress() {
    const steps = getSteps();
    const { activeStep, advance } = useContext(UserContext);

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<CustomConnector/>}
                style={{ backgroundColor: 'transparent'}}
                >
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={CustomStepIcon}>
                        <Typography color="textPrimary" variant="caption">
                            {label}
                        </Typography>
                    </StepLabel>
                </Step>
                ))}
            </Stepper>
            {/* <Stepper
                alternativeLabel
                activeStep={activeStep}
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
            </Stepper> */}
            {/* <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector/>}
                style={{ backgroundColor: 'transparent'}}
                >
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                        <Typography color="textPrimary" variant="caption">
                            {label}
                        </Typography>
                    </StepLabel>
                </Step>
                ))}
            </Stepper> */}
        </React.Fragment>
    );
};