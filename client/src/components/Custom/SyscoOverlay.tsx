import React from 'react';

import {
    createStyles,
    Modal,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core';

import { Spring } from 'react-spring/renderprops';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            zIndex: theme.zIndex.mobileStepper,

        },
        overlay: {
            position: 'relative',
            width: 860,

            transform: `scale(0.75)`,
            
            backgroundColor: theme.palette.text.primary,
            userSelect: 'none',
        },
        title: {
            display: 'flex',
            height: 79,
            justifyContent: 'center',
            alignItems: 'center',
            
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: 30,
            fontStyle: 'italic',
            fontWeight: theme.typography.fontWeightRegular,

            textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'left',

            padding: `1em 1em 1em 1em`,

            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.background.paper,

            fontFamily: theme.typography.fontFamily,
            fontSize: 25,
            fontWeight: theme.typography.fontWeightRegular,
            textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
        },
    }),
);

interface SyscoOverlayProps {
    title?: string;
    open: boolean;
    content?: React.ReactNode | null | undefined;
    handleClose: () => void;
}


export default function SyscoOverlay(props: SyscoOverlayProps) {
    const {title, open, content, handleClose} = props;

    const classes = useStyles();
    const theme = useTheme();

    const Component = () => {
        return (
            <section className={classes.root}>
                <div className={classes.overlay}>
                    <span className={classes.title}>
                        {title}
                    </span>                 
                    <span className={classes.content}>
                        {content}
                    </span>
                </div>
            </section>
        );
    }
        
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClick={handleClose}
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