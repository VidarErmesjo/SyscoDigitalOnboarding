import { createMuiTheme } from '@material-ui/core/styles';

const syscoBlack = {
    light: '#383F48',
    main: '#121921',    // Sysco Black
    dark: '#000'
};

const syscoGreen = {
    light: '#6CFFC8',
    main: '#00FF97',    // Sysco Green
    dark: '#00CA68'
};

const syscoRed = {
    light: '#FF823b',
    main: '#FF4E00',    // Sysco Red
    dark: '#C30500'
};

const syscoYellow = {
    light: '#FFFF57',
    main: '#FFF200',    // Sysco Yellow
    dark: '#C7C000'
};

const syscoBlue = {
    light: '#79FFFF',
    main: '#27F7FF',    // Sysco Blue
    dark: '#00C4CC'
};

const syscoBackground = {
    default: syscoBlack.main,
    paper: '#FFF'
};

const syscoText = {
    primary: '#FFF',
    secondary: syscoBlack.dark
};
  
const theme = createMuiTheme({
    palette: {
        primary: syscoBlack,
        secondary: syscoGreen,
        error: syscoRed,  
        warning: syscoYellow,  
        info: syscoBlue,  
        success: syscoGreen,
        text: syscoText,  
        background: syscoBackground,
    },
    typography: {
        fontFamily: "Arial Regular",
    },
    transitions: {
        duration: {
            enteringScreen: 3000,
            standard: 1000,
        },
    },
    overrides: {
        MuiFormLabel: {
            root: {
                '& label.Mui-focused': {
                    color: syscoText.primary,
                },
            },
        }, 
        MuiOutlinedInput: {            
            root: {      
                '& fieldset': {
                    borderColor: syscoGreen.dark,
                },
                '&:hover fieldset': {
                    borderColor: syscoGreen.main,
                },
                '&.Mui-focused fieldset': {
                    borderColor: syscoGreen.main,
                },
            },                  
        },
    },
    props: {
    }
});

export default theme;