import React from 'react';

// Material UI
import {
    Card,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    DialogProps,
    Grid,
    IconButton,
    Modal,
    ModalProps,
    SvgIcon,
    SvgIconTypeMap,
    Typography
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        actions: {
            padding: 0,
        },
        card: {
            flexBasis: '100%',
            //textAlign: 'center',
            justifyContent: 'center',
            margin: theme.spacing(5),
        },
        title: {
            position: 'absolute',
            left: '50%',
            transform: `translateX(-50%)`,
            padding: 0,
            userSelect: 'none',
        },
        content: {
            display: 'flex',
            padding: 0,
            userSelect: 'none',
        },
    }),
);

interface SyscoModalProps extends DialogProps {
    // Innhold
    left?: null | React.ReactNode;
    right?: null | React.ReactNode;

    // Control
    handleClose: () => void;
};

export default function SyscoModal({handleClose, title, left, right, ...props}: SyscoModalProps) {
    const classes = useStyles();
    const theme = useTheme();

    const PaperProps = {
        style: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 0,
        },
    };

    return (
        <React.Fragment >
            <Dialog
                fullWidth
                maxWidth="lg"
                onClose={handleClose}
                transitionDuration={theme.transitions.duration.enteringScreen}
                disableBackdropClick
                disableEscapeKeyDown
                PaperProps={PaperProps}
                {...props}                
                >
                <DialogActions className={classes.actions}>
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