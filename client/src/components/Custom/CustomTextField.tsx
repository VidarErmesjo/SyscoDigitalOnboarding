import React from 'react';
import {
    createStyles,
    makeStyles,
    TextField,
    Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        root: {
            '& label.Mui-focused': {
                color: 'green',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.secondary.dark,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.secondary.light,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.secondary.main,
                },
            },
        },
    }),
);

export default function CustomTextField({...rest}) {
    const classes = useStyles();
    return (
        <TextField
            color="primary"
            className={classes.root}
            {...rest}
        />
    );
};