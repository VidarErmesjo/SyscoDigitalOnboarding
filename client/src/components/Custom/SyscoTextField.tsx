import {
    TextField,
    withStyles
} from '@material-ui/core';

const SyscoTextField = withStyles(theme => ({
    root: {
        background: 'transparent',
        '& label.Mui-focused': {
            color: theme.palette.text.primary,
        },
        '& label': {
            color: theme.palette.text.primary,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.secondary.dark,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.secondary.main,
                transition: theme.transitions.duration.standard,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main,
            },
        },
    },
}))(TextField);

export default SyscoTextField;