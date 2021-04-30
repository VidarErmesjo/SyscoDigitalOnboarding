import React from 'react';

import {
    Box,
    ButtonBase,
    createStyles,
    Modal,
    Paper,
    Icon,
    IconButton,
    makeStyles,
    PropTypes,
    Theme,
    Typography,
    useTheme,
    withStyles,
} from '@material-ui/core';

import { Route } from 'react-router-dom';

import { Spring } from 'react-spring/renderprops';

import { CloseIcon, ShadowedCubeIcon } from './../icons';

import { Overlay6 } from './../../pages/Onboarding/subpages/Overlays';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',

            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            zIndex: theme.zIndex.mobileStepper,
        },
        small: {
            position: 'relative',
            width: 860,
            height: 311,

            transform: `scale(0.75)`,
            
            backgroundColor: theme.palette.text.primary,
            userSelect: 'none',

            border: '1px solid #000000',
            boxSizing: 'border-box',
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
            backdropFilter: `blur(4px)`,
        },
        large: {
            position: 'relative',
            width: 860,
            height: 767,

            transform: `scale(0.75)`,
            
            backgroundColor: theme.palette.text.primary,
            userSelect: 'none',

            border: '1px solid #000000',
            boxSizing: 'border-box',
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
            backdropFilter: `blur(4px)`,
        },
        title: {
            fontSize: 30,
            marginTop: theme.spacing(-1),
            textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
        },
        closeIcon: {
            position: 'absolute',
            width: 42,
            height: 42,
            left: 811,
            top: 7,
        },
        paper: {
            backgroundColor: 'transparent',
        }
    }),
);

interface SyscoOverlayProps {
    variant: "small" | "large";
    title?: string;
    open: boolean;
    content: React.ComponentType<JSX.Element>;
    handleClose: () => void;
}


export default function SyscoOverlay(props: SyscoOverlayProps) {
    const {variant, title, open, content, handleClose} = props;

    const classes = useStyles();
    const theme = useTheme();

    const Content = () => content;

    const Component = () => {
        return (
            <section className={classes.root}>
                <div className={variant === "small" ? classes.small : classes.large}>                  
                    <IconButton
                        color="secondary"
                        disabled
                        style={{
                            color: theme.palette.text.secondary,
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}
                        >
                        <ShadowedCubeIcon color="inherit"/>
                        <Typography
                            color="inherit"
                            className={classes.title}
                            >
                            <em>{title}</em>
                        </Typography>
                    </IconButton>
                    <IconButton
                        color="secondary"
                        onClick={handleClose}
                        className={classes.closeIcon}
                        >
                        <CloseIcon color="inherit"/>
                    </IconButton>
                    <Typography color="secondary">{content}</Typography>
                </div>
            </section>
        );
    }
        
    return (
        <React.Fragment>
            <Modal
                open={open}
                >
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ duration: theme.transitions.duration.short }}
                    >
                    {props => <div style={props}><Component/></div>}
                </Spring>
            </Modal>
        </React.Fragment>
    );
}