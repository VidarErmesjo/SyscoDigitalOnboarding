import React from 'react';

// Material UI
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogProps,
    Grid,
    IconButton,
    Typography,
    SvgIconProps
} from '@material-ui/core';

// Icons
import {
    Close as CloseIcon
} from '@material-ui/icons';

// Styles
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme
} from '@material-ui/core/styles';

import {
    animated,
    useSpring,
} from 'react-spring';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            transform: `scale(0.75)`,
            userSelect: 'none',
        },
        actions: {
            padding: 0,
        },
        card: {
            flexBasis: '100%',
            justifyContent: 'center',
            margin: theme.spacing(5),
        },
        title: {
            position: 'absolute',
            left: '50%',
            transform: `translateX(-50%)`,
            padding: 0,
        },
        content: {
            display: 'flex',
            padding: 0,
        },
    }),
);

/*interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
        if (open && onEnter) {
            onEnter();
        }
        },
        onRest: () => {
        if (!open && onExited) {
            onExited();
        }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});*/

interface SyscoModalProps extends DialogProps {
    // Innhold
    left?: null | React.ReactNode;
    right?: null | React.ReactNode;

    // Tittel ikon
    icon?: React.ReactElement<SvgIconProps>;

    // Metoder
    handleClose: () => void;
};

export default function SyscoModal(props: SyscoModalProps): JSX.Element {
    const {handleClose, title, icon, left, right, ...rest} = props;

    const classes = useStyles();
    const theme = useTheme();

    const PaperProps = {
        style: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 0,
        },
    };

    // Bytte fra flex til Mui Grid? Vil vi ha gitte størrelse og kvadratisk uttrykk for innhold?

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="lg"
                onClose={handleClose}
                transitionDuration={theme.transitions.duration.enteringScreen}
                disableBackdropClick
                disableEscapeKeyDown
                PaperProps={PaperProps}
                //TransitionComponent={Fade}
                //className={classes.root}
                {...rest}                
                >
                <DialogActions className={classes.actions}>
                    {icon ? icon : null}
                    <Typography
                        color={ title ? "textPrimary" : "textSecondary"}
                        variant="h5" 
                        className={classes.title}
                        >
                        {title ? title : "No title"}
                    </Typography>
                    <IconButton
                        color="secondary"
                        onClick={handleClose}
                        >
                        <CloseIcon color="secondary"/>
                    </IconButton>
                </DialogActions>
                <DialogContent className={classes.content}>
                    <div className={classes.card}>
                        {left ? left : <Typography color="textSecondary" variant="body1">Left</Typography>}
                    </div>
                    <div className={classes.card}>
                        {right ? right : <Typography color="textSecondary" variant="body1">Right</Typography>}
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}