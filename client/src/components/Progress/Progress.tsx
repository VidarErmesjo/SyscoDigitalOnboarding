import React from 'react';
import clsx from 'clsx';

// Material UI
import {
    createStyles,
    IconButton,
    LinearProgress,
    Step,
    StepConnector,
    StepIconProps,
    StepLabel,
    Stepper,
    SvgIcon,
    SvgIconProps,
    makeStyles,
    Theme,
    Typography,
    withStyles,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';

// Ikoner
import {
    SyscoActiveIcon,
    SyscoCompletedIcon,
    SyscoTodoIcon,
    SyscoDoneIcon
} from './../Icons/SyscoStepIcon';

// Animasjon
import { Spring } from 'react-spring/renderprops';

// Route
import { useHistory } from 'react-router-dom';

// API
import { Zustand } from './../../store';
import shallow from 'zustand/shallow';
import {
    getActiveStep,
    getRouteFromStep,
    useRoutes
} from '../../api';

import { config } from '../../api/config';

const CustomConnector = withStyles((theme: Theme) => ({
    alternativeLabel: {
        top: 32,
        width: 'auto',
    },
    active: {
        '& $line': {
            backgroundColor: theme.palette.text.primary,
        },
    },
    completed: {
        '& $line': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    line: {
        height: 1,
        border: 0,
        backgroundColor: theme.palette.text.primary,
        transition: theme.transitions.duration.standard + 'ms',
    },
}))(StepConnector);

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        // root: {
        //     display: 'flex',
        //     //color: theme.palette.text.primary,
        //     backgroundColor: theme.palette.primary.main,
        //     zIndex: 1,
        //     width: 40,
        //     height: 40,
        //     borderRadius: '50%',
        //     //borderColor: theme.palette.primary.main,
        //     border: '0.5em',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     transition: theme.transitions.duration.enteringScreen + 'ms',
        // },
        // active: {
        //     borderColor: theme.palette.secondary.main,
        //     borderStyle: 'solid',
        //     boxShadow: '0 4px 10px 0 rgba(0,255,0,.25)',
        // },
        // completed: {
        //     backgroundColor: theme.palette.secondary.main,
        //     borderStyle: 'none',
        // },
        stepper: {
            backgroundColor: 'transparent',
        },
        linearProgress: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.4,
            borderRadius: 4,
        },
        iconButton: {
            transition: theme.transitions.duration.short + 'ms',
            '&:hover': {
                color: theme.palette.secondary.dark,
            },
        },
        stepConnector: {
            position: 'absolute',
            top: 18,
            width: 'auto',
            left: `calc(-50% + 20px)`,
            right: `calc(50% + 20px)`,
            //flex:'1 1 auto',
        },
        stepLabel: {
            '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
                //margin: 0,
            },
        },
        root: {
            transition: theme.transitions.duration.short + 'ms',
            userSelect: 'none',
            /*'&:hover': {
                transform: `scale(1.2345)`,
            },*/
        },
        active: {
            '&:hover': {
                color: theme.palette.secondary.dark,
            },
        },
        completed: {
            '&:hover': {
                color: theme.palette.secondary.dark,
            },
        },
    }),
);

function SyscoStepConnector(props: SvgIconProps): JSX.Element {
    const classes = useStyles();

    return (
        <SvgIcon
            viewBox="0 0 141 11"
            className={classes.stepConnector}
            >
            <rect width="141" height="11" fill="#fff" rx="5.5"></rect>
        </SvgIcon>
    );
}

function SyscoStepIcon({active, completed}: StepIconProps): JSX.Element {
    const classes = useStyles();
    const theme = useTheme();
  
    return (
        <IconButton
            color="secondary"
            disabled={!active && !completed}
            className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed})}
            >
            {active ? <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.standard }}
                >
                {props => <SyscoActiveIcon color="inherit" style={props}/>}
            </Spring> : !completed ? <SyscoTodoIcon/> : null}
            {completed && <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: theme.transitions.duration.standard }}
                >
                {props => <SyscoCompletedIcon color="inherit" style={props}/>}
            </Spring>}
        </IconButton>
    );
}

export default function SessionProgress(props: any) {
    const [currentStep, data] = Zustand.useStore(state => [state.currentStep, state.data], shallow);
    
    const classes = useStyles();

    // Endre på layout når bredden blir for liten.
    const constricted = useMediaQuery('(max-width:666px)');

    const routes = useRoutes();
    const history = useHistory();
    function handleOnClick(index: number) {
        // Mer ...
        const routes = getRouteFromStep(index);
        
        //history.push(getRouteFromStep(index));
    };

    return (
        <React.Fragment>
            <Stepper
                alternativeLabel
                activeStep={currentStep}
                connector={null}
                //connector={<SyscoStepConnector/>}
                //connector={<CustomConnector/>}
                //connector={<LinearProgress color="secondary" variant="determinate" value={66}className={classes.linearProgress}/>}
                className={classes.stepper}
                {...props}
                >
                {config.map((part: any, index: number) => (
                    <Step key={index}>
                         <StepLabel
                            StepIconComponent={SyscoStepIcon}
                            onClick={() => handleOnClick(index)}
                            className={classes.stepLabel}
                            >                            
                            {!constricted && <Typography
                                color="textPrimary"
                                variant="caption"
                                style={{ userSelect: 'none'}}
                                >
                                {part.title}
                            </Typography>}
                        </StepLabel>                       
                    </Step>        
                ))}
            </Stepper>
        </React.Fragment>
    );
}