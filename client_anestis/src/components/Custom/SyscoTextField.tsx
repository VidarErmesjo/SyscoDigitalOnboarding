import {
    TextField,
    Theme,
    withStyles
} from '@material-ui/core';

const SyscoTextField = withStyles((theme: Theme) => ({
    root: {
        '& label.Mui-focused': {
             //color: theme.palette.text.primary,
        },
        '& .MuiInputLabel-root': {
            backgroundColor: 'transparent',
        },
        '& .MuiInputLabel-shrink': {
            color: theme.palette.secondary.main,
        },
        '& .MuiFormLabel-filled': {
            backgroundColor: 'transparent',
        },
        '& .MuiFormHelperText-root': {
            userSelect: 'none',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.secondary.dark,
                borderWidth: '1px',
                transition: theme.transitions.duration.short + 'ms',
            },
            '&:hover fieldset': {
                borderColor: theme.palette.secondary.main,
            },
            '&.Mui-focused fieldset': {
                borderWidth: '1px',
            },
        },
    },
}))(TextField);

export default SyscoTextField;